filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/home/HeroCarousel.tsx"
with open(filepath, "r") as f:
    content = f.read()

content = content.replace(
    'image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=2000"',
    'image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=2000&auto=format&fit=crop&q=80"'
)

content = content.replace(
    'image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=2000"',
    'image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=2000&auto=format&fit=crop&q=80"'
)

content = content.replace(
    'image: "https://images.unsplash.com/photo-1571401834381-807e997f8c5b?auto=format&fit=crop&q=80&w=2000"',
    'image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=2000&auto=format&fit=crop&q=80"'
)

with open(filepath, "w") as f:
    f.write(content)

print("Images replaced.")
