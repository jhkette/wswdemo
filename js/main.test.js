import fs from 'fs';
import path from 'path';
import {
  it, expect, beforeEach, vi,
} from 'vitest';
// path to index.html
const htmlDocPath = path.join(process.cwd(), 'index.html');
// read index file and convert contents to string
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
// create document from window object
// eslint-disable-next-line no-undef
const { document } = new Window();
// create a new virtual document - ie a virtual DOM
vi.stubGlobal('document', document);
// run this code before the tests - write the file contents to the document.
beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});
// test calender list exists
it('calender list should be present', () => {
  const cal = document.getElementById('calender-list');
  expect(cal).not.toBeNull();
});
// test for headings
it('it has appropriate headings', () => {
  const h1s = document.getElementsByTagName('h1');
  expect(h1s).not.toBeNull();
});
// test for h2 headings
it('it has appropriate h2 headings', () => {
  const h2s = document.getElementsByTagName('h2');
  expect(h2s).not.toBeNull();
});
// test for carousel
it('carousel has children to run', () => {
  const carousel = document.getElementById('carousel');
  expect(carousel.children.length).toBeGreaterThanOrEqual(2);
});
