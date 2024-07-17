import os
import subprocess
import random

# This script converts images to WebP format and generates HTML for the new images

# Directory structure and class assignment
directories = {
    "large": "",
    "medium": ["imgMid", "imgMida"],
    "small": ["imgSmll", "imgSmall"]
}

base_path = "../assets/img/2024/jpg/"
output_base_path = "../assets/img/2024/webp/"
html_output = []

# Ensure the output directory exists
os.makedirs(output_base_path, exist_ok=True)

# Convert images to WebP and generate HTML
for directory, css_classes in directories.items():
    dir_path = os.path.join(base_path, directory)
    output_dir_path = os.path.join(output_base_path, directory)
    
    # Ensure the subdirectory exists in the output path
    os.makedirs(output_dir_path, exist_ok=True)
    
    for filename in os.listdir(dir_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_file = os.path.join(dir_path, filename)
            output_file = os.path.join(output_dir_path, os.path.splitext(filename)[0] + ".webp")
            
            # Convert to WebP
            subprocess.run(['cwebp', '-q', '80', input_file, '-o', output_file])
            
            # Generate HTML
            img_src = f"assets/img/2024/webp/{directory}/{os.path.basename(output_file)}"
            if directory == "large":
                html_output.append(f'<div class="d-none ShuffleMe"><img src="{img_src}"></div>')
            else:
                css_class = random.choice(css_classes)
                html_output.append(f'<div class="d-none ShuffleMe {css_class}"><img src="{img_src}"></div>')

# Output the HTML
html_result = "\n".join(html_output)
print(html_result)

# Save HTML to a file
with open("output.html", "w") as file:
    file.write(html_result)
