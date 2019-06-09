<template>
    <section>
      <post-service>
        <div slot-scope="{data: blogPosts, error, loading}">
          <p v-if="error" class="error">Koneksi sedang terganggu mohon coba kembali.</p>
          <ul v-else class="o-vertical-spacing">
            <template v-if="loading">
              <li v-for="n in 3" :key="n">
                <blog-post loading/>
              </li>
            </template>
            <template v-else>
              <li v-for="blog in blogPosts" :key="blog.id">
                <blog-post>
                  <img slot="figure" :src="blog.image" alt="">
                  <template slot="headline">{{blog.title}}</template>
                  {{blog.snippet}}
                  <span slot="author">{{blog.author}}</span>
                  <span slot="meta">{{blog.date}}</span>
                </blog-post>
              </li>
            </template>
          </ul>
        </div>
      </post-service>
    </section>
</template>
<script>
import PostService from '@/services/PostService'
import BlogPost from "../blogs/BlogPosts";
export default {
  components:{
    PostService,BlogPost
  }
};
</script>
