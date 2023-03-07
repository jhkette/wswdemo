import fs from "fs";
import path from "path";
import { it, expect, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";

const htmlDocPath = path.join(process.cwd(), "information.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// eslint-disable-next-line no-undef
const { document } = new Window();
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it("should be question answer articles", () => {
  const cal = document.querySelectorAll(".question-answer");
  console.log(cal);
  expect(cal.length).toBeGreaterThanOrEqual(2);
});

it("should be question answer articles", () => {
  const cal = document.querySelectorAll(".question-container");
  console.log(cal);
  expect(cal.length).toBeGreaterThanOrEqual(2);
});

// it("it has appropriate headings", () => {
//   const h1s = document.getElementsByTagName("h1");
//   expect(h1s).not.toBeNull();
// });

// it("it has appropriate h2 headings", () => {
//   const h2s = document.getElementsByTagName("h2");
//   expect(h2s).not.toBeNull();
// });

// it("carousel has children to run", () => {
//   const carousel = document.getElementById("carousel");
//   expect(carousel.children.length).toBeGreaterThanOrEqual(2);
// });

// IMPORTANT!!!
// element.classList.contains(class);