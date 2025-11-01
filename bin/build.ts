// build.ts
import { cpSync, readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import { Eta } from "eta";


const ASSETS_DIR = "./shop/assets";
const PRODUCTS_DIR = "./shop/products";
const TEMPLATES_DIR = "./shop/templates";
const DIST_DIR = "./dist";

const eta = new Eta({ views: TEMPLATES_DIR });

// simple template renderer
function render(template: string, data: any): string {
  console.log(`Render template: ${template} -> ${JSON.stringify(data)}`);
  return eta.render(template, data);
}

// ensure dist folder exists
if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR, { recursive: true });


// /shop/assets -> dist/assets
cpSync(ASSETS_DIR, "./dist/assets", { recursive: true });


// load templates
const layoutTpl = "layout.eta"
const productTpl = "product.eta";
const indexTpl = "index.eta";
const productCardTpl = "productcard.eta";

// read all products
const productFiles = readdirSync(PRODUCTS_DIR).filter((f: string) => f.endsWith(".json"));
const products: any[] = productFiles.map((f: string)=>
  JSON.parse(readFileSync(join(PRODUCTS_DIR, f), "utf-8"))
);

// generate product pages
products.forEach(product => {
  console.log(`process ${product.slug}`);
  const outDir = join(DIST_DIR, "products", product.slug);
  mkdirSync(outDir, { recursive: true });

  const content = render(productTpl, product);

  writeFileSync(join(outDir, "index.html"), content);
  console.log(`Generated product page: ${product.slug}`);
});

// generate index.html catalog grid
const productCards = products.map(p => render(productCardTpl, p)).join("\n");

const finalIndexHtml = render(indexTpl, { title: "My Shop", product_grid: productCards });

writeFileSync(join(DIST_DIR, "index.html"), finalIndexHtml);

console.log("Generated index.html catalog");
