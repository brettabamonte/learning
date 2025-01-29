program -> declaration* EOF;

declaration -> varDecl | statement;

varDecl -> "var" IDENTIFIER ( "=" expression)? ";";

statement -> ifStmt | whileStmt | forStmt | exprStmt | printStmt | block;

ifStmt -> "if" "(" expression ")" statement
          ("else" statement)? ;

whileStmt -> "while" "(" expression ")" statement;

forStmt -> "for" "(" ( varDecl | exprStmt | ";" ) expression? ";" expression? ")" statement;

exprStmt -> expression ";"

printStmt -> "print" expression ";";

block -> "{" declaration* "}";

expression -> assignment;

assignment -> IDENTIFIER "=" assignment | logic_or;

logic_or -> logic_and ( "or" logic_and )* ;

logic_and -> comma ( "and" comma )*;

comma -> ternary ( ( "," ) ternary )*;

ternary -> equality ( "?" ternary ":" ternary)?;

equality -> comparison ( ( "!=" | "==" ) comparison)* ;

comparison -> term ( ( ">" | ">=" | "<" | "<=" ) term) *;

term -> factor ( ( "-" | "+" ) factor)*;

factor -> unary ( ( "/" | "*" ) unary)*;

unary -> ( "!" | "-" ) unary | primary;

primary -> NUMBER | STRING | "true" | "false" | "nil" | "(" expression ")" | IDENTIFIER;
