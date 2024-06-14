from random import randint


def makeInvoiceId():
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
               "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    invoice_id = ""
    for i in range(2):
        invoice_id += letters[randint(0, len(letters))]
    for i in range(4):
        invoice_id += str(randint(0, 9))
    return invoice_id
