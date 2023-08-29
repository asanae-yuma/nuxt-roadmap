<template>
    <v-card
        color="white"
        style="margin: 3%"
    >
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.detail }}</v-card-subtitle>
        <v-divider class="detail-line mx-3"></v-divider>
        <v-card-text v-if="item.webs">
            <v-row>参考サイト</v-row>
            <v-row>
                <ul v-for="(web, index) in item.webs" :key="index">
                    <li><a :href="web.url" target="_blank" rel="noopener noreferrer">
                        {{ web.name }}
                    </a></li>
                </ul>
            </v-row>
        </v-card-text>
        <v-card-text v-if="item.books">
            <v-row>参考書籍</v-row>
            <v-row>
                <ul v-for="(book, index) in item.books" :key="index">
                    <li><a :href="book.url" target="_blank" rel="noopener noreferrer">
                        {{ book.name }}
                    </a></li>
                </ul>
            </v-row>
        </v-card-text>
        <v-card-text v-if="item.movies">
            <v-row>参考動画</v-row>
            <v-row>
                <ul v-for="(movie, index) in item.movies" :key="index">
                    <li><a :href="movie.url" target="_blank" rel="noopener noreferrer">
                        {{ movie.name }}
                    </a></li>
                </ul>
            </v-row>
        </v-card-text>
        <v-card-text v-if="item.licenses">
            <v-row>資格</v-row>
            <v-row>
                <table border="1">
                    <tr>
                        <th>資格名</th><th>報奨金</th>
                    </tr>
                    <tr v-for="(license, index) in item.licenses" :key="index">
                        <td>{{ license.name }}</td>
                        <td>{{ license.bounty }}</td>
                    </tr>
                </table>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>

export default {
    props: {
        item: Object
    },
}
</script>
