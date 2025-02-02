# Compiler and flags
CC = gcc
CFLAGS = -Wall -Wextra -I./src

# Directories
SRC_DIR = src
BIN_DIR = bin

# Source and object files
SRCS = $(wildcard $(SRC_DIR)/*.c)
OBJS = $(SRCS:$(SRC_DIR)/%.c=$(BIN_DIR)/%.o)

# Output executable name
TARGET = $(BIN_DIR)/clox

# Default target
all: $(TARGET)

# Linking the object files into the final executable
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) $^ -o $@

# Compiling each .c file into .o object file
$(BIN_DIR)/%.o: $(SRC_DIR)/%.c
	@mkdir -p $(BIN_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

# Clean up object files and executable
clean:
	rm -rf $(BIN_DIR)/*.o

# Phony targets
.PHONY: all clean
