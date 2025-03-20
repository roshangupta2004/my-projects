import sys

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero is not allowed!"
    return a / b

def calculator():
    print("\n🧮 Welcome to the Simple Calculator! 🧮")
    print("-------------------------------------------------")

    while True:
        print("\nSelect an operation:")
        print("1️⃣ Addition (+)")
        print("2️⃣ Subtraction (-)")
        print("3️⃣ Multiplication (*)")
        print("4️⃣ Division (/)")
        print("5️⃣ Exit ❌")

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

        if choice == '1':
            result = add(num1, num2)
        elif choice == '2':
            result = subtract(num1, num2)
        elif choice == '3':
            result = multiply(num1, num2)
        elif choice == '4':
            result = divide(num1, num2)

        print(f"\n✅ Result: {result}")

# Run the calculator
if __name__ == "__main__":
    calculator()
