document.addEventListener('DOMContentLoaded', async () => {
    const fetchAndDisplayBlogs = async () => {
        try {
            const response = await fetch('http://localhost:7011/show/blog');
            const data = await response.json();

            if (response.ok) {
                const blogContainer = document.querySelector('#blogContainer');
                blogContainer.innerHTML = ''; 
                data.seeBlog.forEach(blog => {
                    const blogElement = document.createElement('div');
                    blogElement.classList.add('blog');
                    blogElement.innerHTML = `
                        <h2>${blog.title}</h2>
                        <p class="featurette-box">${blog.content}</p>
                        <p><strong>Author:</strong> ${blog.author}</p>
                    `;
                    blogContainer.appendChild(blogElement);
                });
            } else {
                console.error('Failed to fetch blogs:', data.error);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    await fetchAndDisplayBlogs();

    const findByEmail = async () => {
        const email = localStorage.getItem('email');
        console.log(email);

        try {
            const response = await fetch(`http://localhost:7011/find/blog/byEmail?email=${encodeURIComponent(email)}`);

            const data = await response.json();

            if (response.ok) {
                const blogContainer = document.querySelector('#own-blog');
                blogContainer.innerHTML = ''; 
                data.seeBlog.forEach(blog => {
                    const blogElement = document.createElement('div');
                    blogElement.classList.add('blog');                 
                    blogElement.innerHTML = `
                        <h2>${blog.title}</h2>
                        <p class="featurette-box">${blog.content}</p>
                        <p><strong>Author:</strong> ${blog.author}</p>
                    `;
                    blogContainer.appendChild(blogElement);
                });
            } else {
                console.error('Failed to fetch blogs:', data.error);
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    await findByEmail();
});
