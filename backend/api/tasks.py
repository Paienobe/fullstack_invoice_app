from datetime import datetime, timedelta
from .models import User


def delete_old_guest_accounts():
    threshold_date = datetime.now() - timedelta(days=3)
    expired_guests = User.objects.filter(
        date_joined__lte=threshold_date,
        name__startswith="guest-",
        email__startswith="guest-",
    )
    expired_guests.delete()
    print(f"Deleted {len(expired_guests)} expired guest accounts")
