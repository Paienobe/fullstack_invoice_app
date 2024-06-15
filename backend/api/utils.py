import random
import time

# Assuming this counter will be persisted and loaded between runs
counter = 0


def make_invoice_id():
    global counter
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    random_letters = "".join(random.choices(letters, k=2))

    # Use timestamp in milliseconds and a counter to ensure uniqueness
    # Get last 4 digits of the timestamp
    timestamp = int(time.time() * 1000) % 10000
    # Ensure it stays within 4 digits
    unique_number = (timestamp + counter) % 10000

    # Increment counter for the next call
    counter += 1

    # Format the number to be 4 digits, with leading zeros if necessary
    unique_number_str = f"{unique_number:04d}"

    invoice_id = f"{random_letters}{unique_number_str}"
    return invoice_id
