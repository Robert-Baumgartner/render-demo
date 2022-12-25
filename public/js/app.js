const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: [],
      selectedImmo: -1,
    };
  },

  methods: {
    async getImmos() {
      const { data } = await axios.get('http://localhost:3000/immos');
      this.immos = data;
    },
    async delImmo({ id }) {
      await axios.delete(`http://localhost:3000/immos/${id}`);
      this.getImmos();
    },
    async selectImmo(immo) {
      this.selectedImmo = {...immo};
    },
    async editImmo() {
      await axios.patch(`http://localhost:3000/immos/${this.selectedImmo.id}`, { price: this.selectedImmo.price });
      this.getImmos();
    },
  },
};

createApp(myApp).mount('#app');
