#!/bin/bash

# Define your folders (relative to the current directory)
folders=(
    "./flotsam"
    "./larchiviste"
    "./our_dust"
)

# Destination extension
output_ext="webp"

# Loop through each folder
for folder in "${folders[@]}"; do
    # Find all image files in the folder (adjust extensions as needed)
    for file in "$folder"/*.{jpg,jpeg,png}; do
        if [[ -f "$file" ]]; then
            # Construct output filename
            output_file="${file%.*}.$output_ext"

            # Convert to WebP
            cwebp "$file" -o "$output_file"

            echo "Converted: $file -> $output_file"
        fi
    done
done

echo "All images have been converted."
