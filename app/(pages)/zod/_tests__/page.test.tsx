import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Zod from "../page";

test("Page", () => {
  render(<Zod />);
});
