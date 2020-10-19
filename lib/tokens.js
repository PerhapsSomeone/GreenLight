let temporaryRegex = "";
let inbuiltFunctionList = Object.keys(
  require("./implementations/inbuilt_function").functionMap
);

temporaryRegex += inbuiltFunctionList[0] + "\\(";
for (let i = 1; i < inbuiltFunctionList.length; i++)
  temporaryRegex += "|" + inbuiltFunctionList[i] + "\\(";

console.log(temporaryRegex);
tokens.inbuilt_function.match = temporaryRegex;

let tokens = {
  inbuilt_function: {
    match: "DYNAMICALLY CONSTRUCTED, SEE BELOW",
  },
  constant: {
    match: "vals",
  },
  variable: {
    match: "vars",
  },
  number_literal: {
    match: "[1-9]{1,32}",
  },
  addition: {
    match: "\\+",
  },
  subtraction: {
    match: "\\-",
  },
  multiplication: {
    match: "\\*",
  },
  division: {
    match: "s/s",
  },
  access_property: {
    match: ">>",
  },
  equal: {
    match: "=",
  },
  line_terminator: {
    match: ";",
  },
  string_literal: {
    match: "([\"'])(?:(?=(\\\\?))\\2.)*?\\1",
  },
  conditional_statement_if: {
    match: "if\\(",
  },
  conditional_statement_else: {
    match: "else",
  },
  curly_bracket_open: {
    match: "{",
  },
  curly_bracket_close: {
    match: "}",
  },
  function_keyword: {
    match: "fun",
  },
  boolean_operation: {
    match: "s==s|s>=s|s<=s|s>s|s<s|s&&s|\\|\\||!",
  },
  statement_terminator: {
    match: ";",
  },
  parameter_open: {
    match: "\\(",
  },
  parameter_close: {
    match: "\\)",
  },
  index_open: {
    match: "\\[",
  },
  index_close: {
    match: "\\]",
  },
  whitespace: {
    match: " ",
  },
  call_user_function: {
    match: "call",
  },
  comma: {
    match: ",",
  },
  unknown_reference: {
    match: "\\w+",
  },
};

exports.tokens = tokens;
