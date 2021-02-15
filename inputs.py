
# user_input = input("What's the meaning of life? ")  TypeError: '<' not supported between instances of 'str' and 'int'

user_input = int(input("What's the meaning of life? ")) # ==> Converts any input into an interger

if user_input == 42:
    print("Correct answer!")
elif user_input < 42:
    print("Sorry, but you entered a small answer")
else:
    print("Sorry, but you entered a big answer")


