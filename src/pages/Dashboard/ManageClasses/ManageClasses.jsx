import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: allClasses = [],refetch } = useQuery(['classes', user?.email], async () => {
        const res = await axiosSecure.get(`/classes`)
        return res.data;
    })

    // todo:
    const handleApproved = singleClass => {
        fetch(`http://localhost:5000/classes/approve/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass?.className} is updated!`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    const handleDenied = singleClass => {
        fetch(`http://localhost:5000/classes/deny/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass?.className} is updated!`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    const handleFeedback = (singleClass) => {
        Swal.fire({
          input: 'textarea',
          inputLabel: 'Message',
          inputPlaceholder: 'Type your message here...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed && result.value) {
            const feedbackText = result.value;
      
            fetch(`http://localhost:5000/classes/feedback/${singleClass._id}`, {
              method: 'PATCH',
              body: JSON.stringify({ feedback: feedbackText }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                  refetch();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${singleClass?.className} is updated!`,
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
              });
          }
        });
      };

    return (
        <div>
            <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
            <h2 className="text-center text-3xl font-bold  text-orange-600">Manage Classes</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full mt-5 border">
                    {/* head */}
                    <thead className='bg-zinc-50 text-black'>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-12 w-12" src={singleClass.classImage}/></td>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorName}</td>
                                <td>{singleClass.seats}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status}</td>
                                <td><button onClick={() => handleApproved(singleClass)} disabled={singleClass.status === 'approved' || singleClass.status === 'denied'} className="btn btn-xs bg-green-600  text-white ">Approve</button></td>
                                <td><button onClick={() => handleDenied(singleClass)} disabled={singleClass.status==='denied'} className="btn btn-xs bg-green-600  text-white ">Deny</button></td>
                                <td><button onClick={() => handleFeedback(singleClass)} className="btn btn-xs  btn-neutral ">Feedback</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ManageClasses;