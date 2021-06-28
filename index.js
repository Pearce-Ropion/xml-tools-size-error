const fs = require("fs").promises;
const path = require("path");

const { parse } = require("@xml-tools/parser");
const { buildAst } = require("@xml-tools/ast");

// XML file size: 7 MB
// Maximum XML tag depth: ~30

const main = async () => {
    const filepath = path.resolve(
        __dirname,
        "input.xml"
    );

    const file = await fs.readFile(filepath, "utf-8");

    try {
        const { cst, tokenVector } = parse(file);

        try {
            const ast = buildAst(cst, tokenVector);
            console.log(ast);
        } catch (err) {
            console.error("Error building AST\n", err);
        }
    } catch (err) {
        console.error("Error parsing XML\n", err);
    }
};

main();
