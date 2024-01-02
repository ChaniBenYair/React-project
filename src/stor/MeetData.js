import { observable, makeObservable, action, computed } from 'mobx';
import Swal from 'sweetalert2'

const meeting = {
    serviceName: '',
    serviceDescription: '',
    servicePrice: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    dateTime: '',
}
class Meet{

    meetList=[]
    
    constructor()
    {
        makeObservable(this,
            {
                meetList: observable,
                addMeeting: action,
                currentList: computed,
                initialMeettingList:action
            }
        )
    }
    get currentList() {
        return this.meetList;
    }
    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.statusText);
        if (response.status === 200) {
            this.meetList = ([...this.meetList, meeting])
            Swal.fire({
                title: "נקבעה פגישה",
                text: "פרטיך נקלטו בהצלחה",
                icon: "success"
              });
              return true
        }
        Swal.fire({
            title: 'error',
            text: 'לא ניתן לקבוע את הפגישה',
            icon: "error"
          });
        return false  
    }
    initialMeettingList = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);
    
        const sortedData = data.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetList =  sortedData;
    }

}
export default new Meet()