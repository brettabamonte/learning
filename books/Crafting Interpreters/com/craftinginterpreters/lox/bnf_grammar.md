expression -> comma;

comma -> ternary ( ( "," ) ternary)*;

ternary -> equality ( "?" ternary ":" ternary)?;

equality -> comparison ( ( "!=" | "==" ) comparison)* ;

comparison -> term ( ( ">" | ">=" | "<" | "<=" ) term) *;

term -> factor ( ( "-" | "+" ) factor)*;

factor -> unary ( ( "/" | "*" ) unary)*;

unary -> ( "!" | "-" ) unary | primary;

primary -> NUMBER | STRING | "true" | "false" | "nil" | "(" expression ")" ;


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
| `expression`        | 9          | Left        |
