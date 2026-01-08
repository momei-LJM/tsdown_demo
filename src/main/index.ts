import { bar } from "../bar/bar";
import { fool } from "../foo/foo";
export * from "../bar/bar";
export * from "../foo/foo";
export * from "./components";
console.log(fool + bar);
