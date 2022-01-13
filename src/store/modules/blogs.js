/*
    module for blogs store     
*/

const state = {
    blogs: [
        {
            title: "The 2020 Unspoken Smiles Fellows!",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius consequuntur ullam nihil sint illum nesciunt porro veniam commodi exercitationem natus voluptatem modi libero, repudiandae alias optio, repellendus blanditiis praesentium at reiciendis neque eos esse dicta nisi. Cum reiciendis maiores nam quisquam sequi accusamus unde dignissimos aliquam, quibusdam praesentium id.`,
            author: "kim"
        },
        {
            title: "The Power of Women in Politics Part 2: Leading Women in Our Community with Lindsey Boylan",
            description: `For instance, Mental Health is the cornerstone of my campaign platform. It's a subject that people don't like to talk about, which stands to reason why it is not treated on par with physical health, even though it should be. I have been very vocal about my experience growing up in a family that suffered from mental illness and addiction, and my own struggle with postpartum depression. We can't get the help we need unless we speak out on the issues.`,
            author: "kim"
        },

    ]
}

const getters = {
    getBlogs: (state) => {
        return state.blogs;
    },
}

const mutations = {
    composeBlog: (state, blog) => {
        state.blogs.unshift(blog);
    },
}

const actions = {
    // login and set current username to localstorage
    composeBlog(context, blog) {
        context.commit("composeBlog", blog)
    },
}

export default {
    state, getters, actions, mutations
}