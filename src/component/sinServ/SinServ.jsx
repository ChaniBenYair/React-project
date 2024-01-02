import { observer } from 'mobx-react';
import Meet from '../../stor/MeetData'
import Bussiness from '../../stor/bussinessDetails'
import { useEffect } from 'react';

const SinServ = (observer(() => {

    const service = Bussiness.businessServices.find(
        (service) => service.id === String(id)
    );

    useEffect(() => {
        Meet.initialMeettingList();
        Bussiness.initialbusinessServices();

    }, [])

    return (
        <>
            <div>
                {service}
            </div>
        </>
    )
}))
export default SinServ