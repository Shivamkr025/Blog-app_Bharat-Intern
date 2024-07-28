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
                const response = await fetch('http://localhost:7011/blog/users/signup', {
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
                const response = await fetch('http://localhost:7011/blog/users/login', {
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

            const title = document.querySelector('#blogTitle').value;
            const content = document.querySelector('#blogContent').value;
            const email = localStorage.getItem('email');

            if (!email) {
                alert('Please log in to create a blog.');
                return;
            }

            try {
                const response = await fetch('http://localhost:7011/create/blog', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, content, author: email })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Blog created successfully!');
                    window.location.href = '../index.html';
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
