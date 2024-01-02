import { observable, action, computed, makeObservable,runInAction } from 'mobx';
//import logo from '../assets/images/logo.png'
class Bussiness {

    businessServices = []
    data = {
        name: "חני בן יאיר",
        address: "בן זכאי 56 בני ברק",
        phone: "055-676-9826",
        description: "מסקרת מקצועית"
    }
    constructor() {

        makeObservable(this, {
            data: observable,
            getBussiness: computed,
            updateBussiness: action,
            createBussiness: action,
            businessServices: observable,
            // isLogin: observable,
            // setIsLogin: action,
            addService: action,
            initialbusinessServices: action,
            // setBusinessDetails: action,
            // initBusinessDetails: action,
            // initialBusinessDetails: action
        });
    }
    get getBussiness() {
        return this.data;
    }
    updateBussiness(buss) {
        console.log(buss);
        fetch('http://localhost:8787/businessData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buss)
        }).then(response => response.json()
        ).then(data => {
            this.data = buss;
        }).catch(err => {
            console.log(err);
        })
    };

    createBussiness(buss) {
        fetch('http://localhost:8787/businessData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buss)
        }).then(response => response.json()
        ).then(data => {
            this.data = buss;
        }).catch(err => {
            console.log(err);
        })
    }

    setService = (data) => {
    }
    addService = async (newServiceDetails) => {
        console.log(newServiceDetails)
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newServiceDetails),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText);
        runInAction(() => {
            if (response.status === 200) {
                this.businessServices = ([...this.businessServices, newServiceDetails])
                console.log(this.businessServices)
                return
            }
          })
        
        // console.log(this.businessServices[1])
        return
    }
    initialbusinessServices = async () => {

        const response = await fetch("http://localhost:8787/services");
        const data = await response.json();
        console.log(data);
        this.businessServices = ([...data]);
        console.log("businessServices", this.businessServices)
    }

    initialBusinessDetails = async () => {
        const response = await fetch("http://localhost:8787/businessData");
        const data1 = await response.json();
        this.data = data1;
        // this.data = Object.keys(data1).length===0?data1:this.data;
    };
};
// initialbusinessServices = async () => {
//     const response = await fetch("http://localhost:8787/services");
//     const data = await response.json();
//     this.businessServices = ([...data]);
// };
// setBusinessDetails = async (details) => {
//     const response = await fetch("http://localhost:8787/businessData", {
//         method: "PUT",
//         body: JSON.stringify(details),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });

//     if (response.status === 200) {
//         this.data = details;
//         Swal.fire({
//             title: "The details have been saved",
//             text: "Your details have been successfully entered",
//             icon: "success",
//         });
//     };
//     initBusinessDetails = async (details) => {
//         const response = await fetch("http://localhost:8787/businessData", {
//             method: "POST",
//             body: JSON.stringify(details),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         if (response.status === 200) {
//             this.data = details;
//         }
//     };
  



export default new Bussiness();