import json
import random

# Définir une fonction pour ajouter le prix aléatoire à chaque objet
def add_price(obj):
    obj["price"] = random.randint(100, 100000)
    obj["price_unit"] = "FCFA"
    return obj

# Ouvrir le fichier JSON et charger les objets dans une liste
with open('books.json', 'r') as f:
    data = json.load(f)

# Ajouter le prix aléatoire à chaque objet dans la liste
data_with_price = [add_price(obj) for obj in data]

# Écrire la liste modifiée dans le fichier JSON
with open('add_price.json', 'w') as f:
    json.dump(data_with_price, f, indent=4)