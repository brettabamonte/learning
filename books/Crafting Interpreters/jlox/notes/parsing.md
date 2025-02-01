Precedence = Which expressions get evaluated first
Associativity = How expressions of the same precedence get grouped 

## Key Points!

1. Evaluation order (when things are processed) is still left-to-right.

ex: Expressions are still evaulated left-to-right but grouped right to left
p.s. Think DFS!
```java
    private Expr ternary() {
        Expr expr = equality();
        if (match(QUESTION)) {
            Expr trueExpr = ternary();
            if (match(COLON)) {
                Expr falseExpr = ternary();
                expr = new Expr.Ternary(expr, trueExpr, falseExpr);
            } else {
                throw error(peek(), "Expect ':' between expressions.");
            }
        }
        return expr;
    }
```
2. Grouping (associativity) determines how the expressions bind together when returned
