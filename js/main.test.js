import fs from 'fs';
import path from 'path';
import {
  it, expect, beforeEach, vi,
} from 'vitest';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// eslint-disable-next-line no-undef
const { document } = new Window();
vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('calender list should be present', () => {
  const cal = document.getElementById('calender-list');
  expect(cal).not.toBeNull();
});

it('it has appropriate headings', () => {
  const h1s = document.getElementsByTagName('h1');
  expect(h1s).not.toBeNull();
});

it('it has appropriate h2 headings', () => {
  const h2s = document.getElementsByTagName('h2');
  expect(h2s).not.toBeNull();
});

it('carousel has children to run', () => {
  const carousel = document.getElementById('carousel');
  expect(carousel.children.length).toBeGreaterThanOrEqual(2);
});
