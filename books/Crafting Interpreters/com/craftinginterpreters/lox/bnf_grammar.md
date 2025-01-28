program -> declaration* EOF;

declaration -> varDecl | statement;

varDecl -> "var" IDENTIFIER ( "=" expression)? ";";

statement -> exprStmt | printStmt | block;

exprStmt -> expression ";"

printStmt -> "print" expression ";";

block -> "{" declaration* "}";

expression -> assignment;

assignment -> IDENTIFIER "=" assignment | comma;

comma -> ternary ( ( "," ) ternary)*;

ternary -> equality ( "?" ternary ":" ternary)?;

equality -> comparison ( ( "!=" | "==" ) comparison)* ;

comparison -> term ( ( ">" | ">=" | "<" | "<=" ) term) *;

term -> factor ( ( "-" | "+" ) factor)*;

factor -> unary ( ( "/" | "*" ) unary)*;

unary -> ( "!" | "-" ) unary | primary;

primary -> NUMBER | STRING | "true" | "false" | "nil" | "(" expression ")" | IDENTIFIER;


## Precedence
| Production           | Precedence | Associativity |
|----------------------|------------|--------------|
| `primary`        | 1          | Left         |
| `unary`        | 2          | Right         |
| `factor`           | 3          | Left        |
| `term`        | 4          | Left        |
| `comparison`        | 5          | Left        |
| `equality`        | 6          | Left        |
| `ternary`        | 7          | Right        |
| `comma`        | 8          | Left        |
| `assignment`        | 8          | Left        |
| `expression`        | 9          | Left        |
| `printStmt`        | 10          | Right        |
| `exprStmt`        | 10          | Left        |
| `block`        | 10          | Left        |
| `statement`        | 11          | Left        |
| `varDecl`        | 11          | Right        |
| `declaration`        | 12          | Left        |
| `program`        | 13          | Left        |
