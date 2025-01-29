program -> declaration* EOF;

declaration -> funDecl | varDecl | statement;

funDecl -> "fun" function ;

function -> IDENTIFIER "(" parameters? ")" block ;

parameters -> IDENTIFIER ( "," IDENTIFIER )* ;

varDecl -> "var" IDENTIFIER ( "=" expression)? ";";

statement -> ifStmt | whileStmt | forStmt | returnStmt | exprStmt | printStmt | block;

ifStmt -> "if" "(" expression ")" statement
          ("else" statement)? ;

whileStmt -> "while" "(" expression ")" statement;

forStmt -> "for" "(" ( varDecl | exprStmt | ";" ) expression? ";" expression? ")" statement;

returnStmt -> "return" expression? ";" ;

exprStmt -> expression ";"

printStmt -> "print" expression ";";

block -> "{" declaration* "}";

expression -> assignment;

assignment -> IDENTIFIER "=" assignment | logic_or;

logic_or -> logic_and ( "or" logic_and )* ;

logic_and -> ternary ( "and" ternary )*;

ternary -> equality ( "?" ternary ":" ternary)?;

equality -> comparison ( ( "!=" | "==" ) comparison)* ;

comparison -> term ( ( ">" | ">=" | "<" | "<=" ) term) *;

term -> factor ( ( "-" | "+" ) factor)*;

factor -> unary ( ( "/" | "*" ) unary)*;

unary -> ( "!" | "-" ) unary | primary;

call -> primary ( "(" arguments? ")" )* ;

arguments -> expression ( "," expression )* ;

primary -> NUMBER | STRING | "true" | "false" | "nil" | "(" expression ")" | IDENTIFIER;
