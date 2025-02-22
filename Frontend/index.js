document.addEventListener('DOMContentLoaded', async () => {
    const signUpForm = document.querySelector('form#signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (signUpForm) {
        signUpForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                const response = await fetch('https://blog-app-bharat-intern.onrender.com/blog/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    alert(data.message);
                    signUpForm.reset();
                    window.location.href = '../pages/login.html';
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to sign up. Please try again.');
            }
        });
    }

    const loginForm = document.querySelector('form#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                const response = await fetch('https://blog-app-bharat-intern.onrender.com/blog/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    alert(data.message);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('email', data.email);

                    window.location.href = '../index.html';
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to login. Please try again.');
            }
        });
    }

    const createBlogForm = document.querySelector('form#blogForm');

    if (createBlogForm) {
        createBlogForm.addEventListener('submit', async (event) => {
            event.preventDefault();
    
            // Get form values
            const title = document.querySelector('#blogTitle').value.trim();
            const content = document.querySelector('#blogContent').value.trim();
            const category = document.querySelector('#blogCategory').value;
            const imageFile = document.querySelector('#blogImage').files[0]; // Get uploaded image
            const email = localStorage.getItem('email');
    
            if (!email) {
                alert('Please log in to create a blog.');
                return;
            }
    
            if (!title || !content || !category) {
                alert('Please fill in all required fields.');
                return;
            }
    
            // Prepare FormData for sending including image upload
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('category', category);
            formData.append('author', email);
            if (imageFile) {
                formData.append('image', imageFile);
            }
    
            try {
                const response = await fetch('https://blog-app-bharat-intern.onrender.com/create/blog', {
                    method: 'POST',
                    body: formData
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    alert('Blog created successfully!');
                    window.location.href = '../pages/showBlog.html';
                } else {
                    alert(data.message || 'Failed to create blog.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to create blog. Please try again.');
            }
        });
    }
    
    
});

