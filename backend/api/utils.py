import secrets


def make_invoice_id():
    return secrets.token_urlsafe(4).upper()
