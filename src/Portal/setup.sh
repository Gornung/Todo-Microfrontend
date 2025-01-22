#!/bin/bash

# Setze den Basisordner zum Wurzelverzeichnis des Repos
BASE_DIR="$(cd "$(dirname "$0")/../.." && pwd)"

# Funktion zum Installieren der Abhängigkeiten und Erstellen eines npm links
install_and_link() {
    dir=$1
    target_dir="$BASE_DIR/Todo-Microfrontend/$dir"

    if [ -d "$target_dir" ]; then
        echo "Wechsel in das Verzeichnis: $target_dir"
        cd "$target_dir" || exit

        # Führe npm install aus
        echo "Führe npm install aus in $target_dir"
        npm install

        # Erstelle npm link von shared-types, außer für Server und Sidebar
        if [ "$dir" != "Sidebar" ] && [ "$dir" != "shared-types" ]; then
            echo "Erstelle npm link zu shared-types in $dir"
            npm link ../shared-types
        fi

        # Gehe zurück zum Hauptverzeichnis
        cd "$BASE_DIR/Todo-Microfrontend"
    else
        echo "Verzeichnis $dir nicht gefunden!"
    fi
}

# Verzeichnisse, für die npm install und npm link ausgeführt werden sollen
directories=("Details" "Elements" "Overview" "Portal" "Server" "Sidebar" "shared-types")

# Führe das Skript für jedes Verzeichnis aus
for dir in "${directories[@]}"; do
    install_and_link "$dir"
done

echo "Setup abgeschlossen!"
