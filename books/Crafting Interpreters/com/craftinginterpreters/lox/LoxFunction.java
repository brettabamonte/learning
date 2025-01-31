package com.craftinginterpreters.lox;

import java.util.List;

//Wraps the function syntax node
class LoxFunction implements LoxCallable {
    private final Stmt.Function declaration;
    private final Environment closure;
    private final boolean isInitalizer;

    LoxFunction(Stmt.Function declaration, Environment closure, boolean isInitalizer) {
        this.declaration = declaration;
        this.closure = closure;
        this.isInitalizer = isInitalizer;
    }

    @Override
    public Object call(Interpreter interpreter, List<Object> arguments) {
        //Create new env for function
        Environment environment = new Environment(closure);
        //Bind parameter names to argument values
        for (int i = 0; i < arguments.size(); i++) {
            environment.define(declaration.params.get(i).lexeme, arguments.get(i));
        }
        try {
            interpreter.executeBlock(declaration.body, environment);
        } catch (Return returnValue) {
            if (isInitalizer) return closure.getAt(0, "this");
            return returnValue.value;
        }
        if (isInitalizer) return closure.getAt(0, "this");
        return null;
    }

    @Override
    public int arity() {
        return declaration.params.size();
    }

    @Override
    public String toString() {
        return "<fn " + declaration.name.lexeme + ">";
    }

    LoxFunction bind(LoxInstance instance) {
        Environment environment = new Environment(closure);
        environment.define("this", instance);
        return new LoxFunction(declaration, environment, isInitalizer);
    }
}
