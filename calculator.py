import sys

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return "Error: Division by zero is not allowed!" if b == 0 else a / b

def calculator():
    print("\n🧮 Welcome to the Simple Calculator! 🧮")
    
    while True:
        print("\n1️⃣ Addition (+)\n2️⃣ Subtraction (-)\n3️⃣ Multiplication (*)\n4️⃣ Division (/)\n5️⃣ Exit ❌")
        choice = input("Enter your choice (1-5): ")

        if choice == '5':
            print("\nThank you for using the calculator! 👋")
            sys.exit()

        if choice not in ['1', '2', '3', '4']:
            print("\n⚠️ Invalid choice! Please select a valid option.")
            continue

        try:
            num1 = float(input("\nEnter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("\n⚠️ Invalid input! Please enter numeric values.")
            continue

        result = add(num1, num2) if choice == '1' else subtract(num1, num2) if choice == '2' else multiply(num1, num2) if choice == '3' else divide(num1, num2)
        print(f"\n✅ Result: {result}")

if __name__ == "__main__":
    calculator()
