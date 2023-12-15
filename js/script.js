const {createApp} = Vue;

createApp({
    data(){
        return{ 
            clickIndex:0,
            cerca:'',
            min:0,
            contacts: [
                {
                  name: 'Michele',
                  avatar: './img/avatar_1.jpg',
                  visible: 'true',
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 16:15',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: './img/avatar_2.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '20/03/20 16:30',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      date: '20/03/20 16:30',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      date: '20/03/20 16:35',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: './img/avatar_3.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '28/03/20 10:10',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      date: '28/03/20 10:20',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      date: '28/03/20 16:15',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Alessandro B.',
                  avatar: './img/avatar_4.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Alessandro L.',
                  avatar: './img/avatar_5.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Claudia',
                  avatar: './img/avatar_6.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      date: '10/01/20 15:51',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  name: 'Federico',
                  avatar: './img/avatar_7.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  name: 'Davide',
                  avatar: './img/avatar_8.jpg',
                  visible: true,
                  messages: [
                    {
                      date: '10/01/20 15:30',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      date: '10/01/20 15:50',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      date: '10/01/20 15:51',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
              ]
                
        }
    },
    methods: {
      addNewMessage(){
        this.data = new Date();
        this.min=this.data.getMinutes();
        if(this.min < 10) {this.min='0'+ this.data.getMinutes()};
        let obj={
          date: `${this.data.getHours()}:${this.min}`,
          message: this.newMessage,
          status: 'sent'
        }
        this.contacts[this.clickIndex].messages.push(obj)
        this.newMessage = "";

        this.interval = setTimeout(() => {
          let obj={
            date: `${this.data.getHours()}:${this.min}`,
            message: "ok",
            status: 'received'
          }
          this.contacts[this.clickIndex].messages.push(obj)
      },1000)
      },
      search(){
        this.contacts.forEach((elem) => {
          if(elem.name.toLowerCase().includes(this.cerca.toLowerCase())){
            console.log(elem)
            elem.visible=true;
          }
          else{
            elem.visible=false;
          }
        });
      },
      removeItem(i,iMess){
        let conf = confirm("vuoi eliminare questo messaggio?");
        if(conf){
            this.contacts[i].messages.splice(iMess,1);
        }
    }
    },
}).mount('#app');