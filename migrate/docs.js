const fs = require('fs')
const glob = require('glob')
const dom = require('jsdom')
const { bindNodeCallback, zip, Observable } = require('rxjs')
const { take, filter, switchMap, flatMap, map, reduce, tap, ignoreElements } = require('rxjs/operators')

const glob$ = bindNodeCallback(glob)
const readFile$ = bindNodeCallback(fs.readFile)
const writeFile$ = bindNodeCallback(fs.writeFile)


const inputPath = '/Users/adam/neo4j/developer-resources/**/*.adoc'
const outputPath = '/Users/adam/projects/docs/asciidoc/developer/modules/ROOT/pages/'

const attributesPattern = /^:([a-z0-9-]+)(!)?:(.*)?\n/gmi

const includePattern = /include::(.*)\/_includes/g
const includeReplace = 'include::./_includes'

const ignoreFiles = ['README.adoc', 'guide_template.adoc', 'landing-page.adoc', '-driver.adoc']
const ignoreFolders = ['_includes', 'landing-page']

const replaceStrings = {
    '../../language-guides/ruby/ruby.adoc' : './ruby.adoc',
}

const renameAttributes = {
    // Strip
    slug: null,
    icons: null,
    'section': null,
    'section-link': null,
    'section-level': null,
    'sectanchors': null,
    'toc': null,
    'toc-title': null,
    'toclevels': null,
    'toc-placement': null,

    // Rename
    // level: 'page-level',
}

// TODO:
const copyAttributes = {
    level: 'page-level',
}


const read$ = glob$(inputPath)
    .pipe(
        flatMap(path => path),
        filter(path => !ignoreFiles.some(filename => path.includes(filename))),
        filter(path => !ignoreFolders.some(folder => path.includes(folder))),
        map(path => ({
            path,
            content: fs.readFileSync(path).toString()
        })),
        map(({ path, content }) => {
            const attributes = Array.from(content.matchAll(attributesPattern))
                .map(([ line, key, _, value ]) => ({ line, key, value: value && value.trimStart() }))

            // Convert filename
            const slug = attributes.find(att => att.key == 'slug')
            const filename = slug
                ? `${slug.value}.adoc`
                : path.split('/').pop()

            // Strip Attributes
            attributes
                .filter(({ key }) => renameAttributes.hasOwnProperty(key))
                .map(({ line, key, value }) => {

                    const replaceWith = renameAttributes[ key ]
                        ? `:${ renameAttributes[ key ] }: ${value}\n`
                        : ''

                    content = content.replace(line, replaceWith)
                })

            // Copy Attributes
            attributes
                .filter(({ key }) => copyAttributes.hasOwnProperty(key))
                .map(({ line, key, value }) => {

                    const copiedAttribute = copyAttributes[ key ]
                        ? `:${ copyAttributes[ key ] }: ${value}\n`
                        : ''

                    content = content.replace(line, `${line}${copiedAttribute}`)
                })

            // String replacements
            Object.entries(replaceStrings).map(([key, value]) => {
                content = content.replace(key, value)
            })

            // Correct includes
            content = content.replace(includePattern, includeReplace)

            // Moved variables from versions.txt into antora.yml
            content = content.replace(/include::(.*)?versions.txt/g, '')

            // Convert level
            content = content.replace(`[role=expertise]\n{level}`, '[role=expertise {level}]\n{level}')

            return { filename, attributes, content }
        })
    )


const write$ = read$.pipe(
    switchMap(n => writeFile$(outputPath + n.filename, n.content))
)

write$.subscribe({
    next: next => console.log(next),
    error: error => console.log('error', error),
    complete: () => console.log('\n\n👍 complete')
})
