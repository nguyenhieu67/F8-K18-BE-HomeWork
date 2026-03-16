const $ = document.querySelector.bind(document);
const postList = $("#post-list");

let localPosts = [];

const renderPost = () => {
    const html = localPosts.map(
        (post) =>
            `
                <li class="bg-white rounded-xl shadow-xl flex flex-col">
                    <img
                        src="https://picsum.photos/300?random=${post.id}"
                        alt=""
                        class="rounded-t-xl w-full h-75"
                    />
                    <h3 class="mt-2.5 px-4 text-xl line-clamp-2">${post.title}</h3>
                    <div class="p-4 flex items-center justify-between justify-items-end">
                        <div class="flex gap-2 text-sm">
                            <div class="post-card__like">
                                <button onclick="handleLikeDislike(${post.id})"><i class="fa-regular fa-thumbs-up"></i>${post.reactions?.likes || 0}</button>
                            </div>
                            <div class="post-card__dislike">
                                <i class="fa-regular fa-thumbs-down"></i>${post.reactions?.dislikes || 0}
                            </div>
                        </div>
                        <button onclick="viewdetailPost(${post.id})" class="p-2 bg-cyan-500 rounded-full w-25 text-white cursor-pointer">Chi tiết</button>
                    </div>
                    <div class="self-center pb-4">
                        <button onclick="handleUpdate(${post.id})" class="bg-yellow-400 text-white p-2 rounded-lg cursor-pointer w-15">Sửa</button>
                        <button onclick="handleDelete(${post.id})" class="bg-red-400 text-white p-2 rounded-lg cursor-pointer w-15">Xóa</button>
                    </div>
                </li>
       `,
    );

    postList.innerHTML = html.join("");
};

const getPosts = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/posts?limit=9");
        localPosts = response.data.posts;
        renderPost();
    } catch (error) {
        console.error("Lỗi lấy data:", error);
    }
};

// Create post
window.handleAddPost = async () => {
    const title = prompt("Nhập tiêu đề post mới:");
    if (!title) return;

    const response = await axios.post("https://dummyjson.com/posts/add", {
        title,
        userId: 5,
    });

    const newPost = {
        ...response.data,
        title: response.data.title || title,
    };

    // Fake add post
    localPosts.unshift(newPost);
    renderPost();
    console.log("Thêm thành công bài post:", newPost);
};

$(".btn-add").addEventListener("click", handleAddPost);

// Update post
window.handleUpdate = async (id) => {
    const post = localPosts.find((p) => p.id === id);
    const newTitle = prompt("Sửa tiêu đề bài viết:", post.title);

    if (newTitle && newTitle.trim() !== "" && newTitle !== post.title) {
        const response = await axios.patch(
            `https://dummyjson.com/posts/${id === 252 ? 251 : id}`,
            {
                title: newTitle,
            },
        );

        post.title = response.data.title;

        console.log("Sửa thành công bài post:", post);
        renderPost();
    }
};

// Delete post
window.handleDelete = async (id) => {
    const post = localPosts.find((p) => p.id === id);
    if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
        await axios.delete(
            `https://dummyjson.com/posts/${id === 252 ? 251 : id}`,
        );

        localPosts = localPosts.filter((p) => [p.id !== id]);

        // Fake delete post
        localPosts.shift();
        renderPost();
        console.log("Xoá thành công bài post:", post);
    }
};

// BOM chi tiết bài viết
window.viewdetailPost = (id) => {
    window.location.href = `./postDetail.html?id=${id}`;
};

// Handle click update like and dislike
window.handleLikeDislike = (id) => {
    const post = localPosts.find((p) => p.id === id);
    if (post.reactions.likes) {
        post.reactions.likes += 1;
        console.log(post.reactions.likes);
    }
};

getPosts();
