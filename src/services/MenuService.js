function fakeMenu() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Profil Desa',
                    rute: '/profile',
                    id: 1,
                    child: [
                        {
                            title: 'Sejarah Desa',
                            rute: '/profile/sejarah',
                            id: 100,
                            child: []
                        }, {
                            title: 'Topologi Desa',
                            rute: '/profile/topologi',
                            id: 101,
                            child: []
                        }, {
                            title: 'Geografis Desa',
                            rute: '/profile/geografis',
                            id: 102,
                            child: []
                        }, {
                            title: 'Potensi',
                            rute: '/profile/potensi',
                            id: 103,
                            child: [
                                {
                                    title: 'Potensi Alam',
                                    rute: '/profile/potensi/alam',
                                    id: 10001,
                                    child: []
                                }, {
                                    title: 'Potensi Manusia',
                                    rute: '/profile/potensi/sdm',
                                    id: 10002,
                                    child: []
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'Lembaga Pemerintahan',
                    rute: '/lembaga',
                    id: 2,
                    child: [
                        {
                            title: 'Pemerintah Desa',
                            rute: '/lembaga/desa',
                            id: 200,
                            child: []
                        }, {
                            title: 'Dewan Perwakilan Desa',
                            rute: '/lembaga/dpd',
                            id: 201,
                            child: []
                        }, {
                            title: 'PKK',
                            rute: '/lembaga/PKK',
                            id: 203,
                            child: []
                        }
                    ]
                }
            ])
        }, 2000)
    })
}
export default {
    data() {
        return {
            data: null,
            error: null,
            loading: true
        }
    },
    async created() {
        try {
            this.data = await fakeMenu();
            console.log(this.data)
            this.loading = false;
        } catch (e) {
            this.error = e;
        }
    },
    render() {        
        return this.$scopedSlots.default({            
            data: this.data,
            error: this.error,
            loading: this.loading
        })
    }
}