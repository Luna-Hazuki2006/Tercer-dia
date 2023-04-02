# Lotería
import random

def make_ticket(length, maximum):
    ticket = []
    while len(ticket) < length:
        num = random.randint(1, maximum)
        if not num in ticket:
            ticket.append(num)
    return ticket

def main():
    N = int(input("Enter the number of tickets to generate: "))
    for i in range(N):
        print(f"Ticket #{i+1}: {make_ticket(6, 49)}")

if __name__ == "__main__":
    main()