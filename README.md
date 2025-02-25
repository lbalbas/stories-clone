# Stories Clone (React + Vite)

This project is a responsive stories clone built with React and bootstrapped with Vite. It allows users to upload images, which are then converted to base64 and displayed as stories. The stories are stored in `localStorage` for persistent data and automatically deleted after 24 hours.

Live demo available [here](https://lovely-lamington-a3f0ee.netlify.app/)

## Features

* **Responsive Design:** Adapts to various screen sizes.
* **Image Upload:** Users can upload images to create stories.
* **Base64 Conversion:** Images are converted to base64 for storage.
* **LocalStorage Persistence:** Stories are stored in `localStorage` for persistence across sessions.
* **Automatic Deletion:** Stories are automatically deleted after 24 hours.
* **Vite Powered:** Fast development and build process.

## Technologies Used

* **React:** JavaScript library for building user interfaces.
* **Tailwind CSS:** Utility-first CSS framework.
* **Vite:** Next generation frontend tooling.
* **JavaScript:** Core programming language.

## Getting Started

1.  **Clone the repository:**

    ```
    git clone https://github.com/lbalbas/stories-clone
    cd stories-clone
    ```

2.  **Install dependencies:**

    ```
    pnpm install
    ```

3.  **Run the development server:**

    ```
    pnpm run dev
    ```

    This will start the development server at `http://localhost:5173/`.
