## @xml-tools/parser Error

This repo is a minimum reproducable example that illustrates a
**Maximum Call Stack Size Exceeded** Error in the npm package
`@xml-tools/parser`

I believe the error has to do with the size of the file and not the depth of
the xml.

The input file is called `inputs/main.xml`

-   File Size: `7MB`
-   Maximum XML Depth: `29`

### Getting started

1. Clone the repo
2. Run `npm install`
3. Run `npm run start`

### Testing a smaller XML document

I have included a script that runs the parser on a smaller document, the
contents of which are a subset of the larger xml file. The input file is called `inputs/small.xml`

1. Run `npm run start:small`
