import React, { useState } from 'react'



function Navbar() {
    const [flag,setflag]=useState(false);
    
  return (
    <div className=''>
    <div className='bg-white text-black p-3 text-sm flex justify-between'>
        <div className='flex items-center'>
            <img className="w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEVlb6pLWJb///9ZZKBATpFfaqefpcizuNBkbqrv8PXc3upPXJlEUpQ9TJBeaafq7PJaZaU4SI5GVJT5+fvh4+3Lzt9ibaJqdK2Olb+7v9V1frKvtNHX2eZ1fqyprs309PiRmLxsdqjCxtyFjbU0RY1UYKN9hbaWncKDi7nGydt8hK9xeqpxerCEjLOaoMGpr8p5QlqZAAAO+klEQVR4nOWdeWOqOBDAI5WKF0bx1ldaffZwu+33/3aLKMkQQphcvH12/tq14ONnJnNlEkjgW5J0vth8fx3PL8uH4bDzQC6y2r6/9TaHfT9JfP/7xON39+cfT8eXznQ67o5Gs9msc5ErISFRGMcxPdHV+nE3mHh8Cl+Eg83zy3A8Ht24uBSETDJSGm/Xm72n0fRBOO+dh90MriOTCmExojT63O09PI1rwvTj2Jl25XAKwpwyiild9/qOn8gp4WRzno1H9XRqwpvO0vfd3OVDuSNMDr9m3Qa8ZsLrxNw6HElXhPvjeKzQTR3Ci8JmI7lw9GROCNPecto8ehqEl5Gk5MnJQDognH91VKbFkDCTOH52YFytCQdnxOQzI8x8CN1aM1oS7l+m+OHTJrxA0k/LCWlFuP+ly6dNeGHcWjFaEM419dOQ8ML4aqGrxoT9Z5x3cEB4MaxrY7tqSvg9Mhg/Y8KM8fRkGJmbEe6XYzM+Y8LMd6zMpqMJYfKs4f+cEWbTcZ22Q7iYGSqoJeFFVTctEKbHqQWfHSEh9F27HKBLuH+wGUBrQhKSD7+EX2Yuwh1hNoxvHgkny64lnwPCzKhqZcg6hIuOpYa6Icyyx4Mfwm9jH+iYMPMbjx4Ik7MTQCeEmaa+ol0jlrBva0PdEmY2FTsZkYSDoa0NdUyYZcfIfANHuKiUrv84YeY2Du4Ie79d8bkkJKedK8JvuzjNGyGhT24In9wYUQ+EBOM1mgm/nAK6JcSEcI2EXy5V1DkhArGJ0K2KuidsVtQGQjeRmk/CRnOjJuw5VlEfhISqnYaScOHQD/ojJKeDKeHAWSDjl5BQVQCnIOw7i0V9E5JQEYbXEyYPPgD9EEakPpmqJzw7SpfaICThqz6hez/hk5DEtW6xjnDhCdAXYX0uVUM48TIHfRJGtMba1BAu/UxCj4QkWukQftnXRVsnJLE8CJcSepuEXgkJlRb8ZYSpH0/onZBEsmUbGeHR2yT0TBi+4wgX7hOKlggJlawvVgkTnyPomZCcqg0NVcLnv5kwXDcT7v05ihYICa20M4iEydKjHW2BMFqJTSkioa+Auy1CEotlG4Gw71lH/RMSOlESejYzbRCKxqZMOPCtoy0QilWbMuHZs5lphVDI90uEvj1FO4SCxygR/vI+C1shLA8iJNx7DUjbIywPIiR88T8L2yGMPuWEgzaGsBXCkjkFhG3MwpYI4UzkhPMWDGlbhCQeSAj9hzNtEr5VCdNW+NoijOJ+hXDnP2BrkRCkGIzQd17YMiEhImEr3r5NQub1C0KvFcQ/QRi9lwmTlmZhi1pK+yXCTTvOsE3CeFMi/NWSnWmRMHqFhP6WCxWEUSHoZ9a7IZ4DQqSSzkZANKjgfZwwZIJ7Yt3r4x0gxHUljL77EyZ7/LCPjvy+/tvt+cK3tPhoQTEPTD+Kb0nfUIy3dZqcMMU9bbcXAPkHjTiFpaHH29PBHO4To3cRuzxBXV9Y05zwA+cryoTImzIdXcLbCkKYiD/FiBHhzRa4MS+saU6ITCvKhAHWwXRLnXWMENQ1BwhCyvOhNXbirhkh9lHLhF9IYzMrFaEZIaF8hWHbqHbRll2dxljrSwvCOTImFQiRt83Opbs4Idi9tGscRLAcsUGM+I1wfyPsIfVNIETammm5BM0Joy37cNI4s2LeLdM84Oym3Y0QW+kWCTc4W1O+iRPqPLXWr1G+60KI46sSpkPMTd/1hFzzeg2aF3NrhTG8BWGU5IQDtFEUCFE2eCysrAPC6JNZj37DwJy4tVqhAa8TkaCVTUKI+G1mR+EeQAjLmu9KNQVKuscP4dUjEo0iW4UQUfoYi+vqkBBUxA7KQYx5F8mbDuHFIxKNYn6VsNEKzx7EZXVIGIVcTZUZA2WqnmrwXTMoEvQx9qKGsLE0MKpshoCEsClUFahEPPxRj3VF4klGOEcXMKqEjeWdUaXTrEQIqu8LhfaBH0I9X6t3zjPCA7qAwQn7hXY1lOhm/1R+kxIhsJEK9YsipqQazjCXuJcRPqJzWU64ZzNfbWvG1X7IMiHwc/VJH4jRm8M7gfAxI/wXnedxwgFLiL6VGjBjN7BRKBOCLHFfOzwxt8d6fPmPQzTWRQHh7yLgUlZ4Rl/FDUemjWVCEnOXWJcy5JFJ069QJ6uEJFi+EuGUPbsqqJ0Wv0ParRlDmNg+1qgpUFItZ5gLTUiKL+cDwvGw2KSi6Jie/WK6PKsjJCu222VQM0A88tFzhrmcUqKxtg0Iu2Nma+rdafdQXPPQqSUEzdny8ksUsgs0neH15yEaXeuQkPuBp1pbDMZ5WEsIvLk8awB6jC1fAIkPRKOeDwn5HJvUKcHoubj8PKonBBHZXDpEvECj6wxzwg3p4Uu7JUL4/PLLx8DeKghjHinJ8mBQoNF1htdvJ9h6kkjYGRf/U1NWnEGfqSAEe11kCCBNRpZJSxK+kSO+dl0m7Ba2JnmQX81s0YNyDIEazmWErNRRZ2uVEr0TjXbEMiEfI7kajArtuuxuUBECU1JVU5D71vlLtWyJRqtXmbDTLX77uYyQz9PLyp2KkPDW7GqhkAeuiYGOXr6cLNGAIiFnkP1K48JP9y+2VknI6/vVcg3vaValV0pC+STCEHY6hb+TeByuw7m/VBKCsExM/4CSGjjDq6Az/Coh//+qNeV/y39CJSHh7T1i1MILNJPQTEutCPk4VYtZLBC9xkwNhOyLU4GDhwNNFVUvhJ1pYWsqwS0vIl5ttZqwVhcjvhnt1VRJCR6wSlhva9hixeR6pZqQnJjTK68N8gKNPKJDic0YdsaFnRfLig8MaIQh5C4xhSVtUKAxc4b2hOyTvnAlW6y4fX0DIeGRGyzXACOLXjN0TMhtTbms2C3bmWZCXoqBakqln+qKjT8Efn0PHcaI2ZlifjYR1owWC3aMnWEm5jFNzsJsDdwdzRYrWLW5iVA640K2rKGu+StlZRGX5jIr4hpQVpwxO8Ni8iZC4Np5CsELNPiFbVGilXluIXwGKlrdIqXjeVUjIajvr27jFVH2kbkzzHIL4/xQHC/+Rd0iWua5cSMhcIlFuYa7EAtnmOWHxjn+TZhvZyUtXkTkHY/NhDyXL3h4ZqyxsC1KluN/WxIyu8nOJKraGQwh6Oq65sGg4K+zsC1I3DOutTFhMfZT8WFxFVAPBCG3K9dyDR9U/Vo+INyY1kvBp0UWflvCGLHpAy5CEHKXeC3X8AKNjTOMDwTbEFU/hiyuuU67bvFkB/DbIQhJxOr7FzXl+Qa+y0sidG+4bgFVm8U1uenkdgZ6Wgwh7wK75IK8QHMwtzP5uoXZ2hMk5DHaBan7IbsGNYYsGUxpvgJ/EwtnmK89ma0flswTi7MvpmVYxJKlvB9DCKDeI66ksiIqXlama8BlwkKhsjnNFkXLLWE4QqaYm5j/t0ktn0m+Bmyyji80Qw2Lz/+ZsQWbcqcVipDX9+eUufsE34ookXwd36QXQyBkcc1hygxrWflRhNwlJp9xcb2NM7z1Ypj00wiErO6UjooUQahN4Qh5F9gbc476C9tQ8n4ak54osWWPNTo/Fz5NqC/iCHkX2KH4pxJqo6QknBj2tYmEYhNpkAheFkfIXWK/uN5gYRvIta/NpDexMoZLoUFPrL0hCaPKYV2vdkO4Nu0vrTSWjoVTYMVWKSxhKPTBTaxmYdFfOrAfQ7FRtvJ3JCFc8s7FyhmyHmFFvwiasDMtNTtXFB9LCOr7uVg5QxKR5NarjxxEFWHJ1vQrt2IJ4daYwHBhGxAWvfr6+y0kDd5D8GDVL0QThqWzZC1q+Rdh+y3098xICLugobvakokmjGIAmFjxgT0z+vueJIRg84+krRZNWDpbxqaWn39XEJjuXZNtQ+AbuCSt0XhC6BI1W55FAXvXtPcfygiZrUklv5cGYcj78k9WgHD/ofYeUukYFhsPZIYLTwhcovnC9lXAHlLtfcAL2fXjw/WPstbv4UDcB1wr0WtxqZ0zLO0D1t7LLR/zmeKPkr3ctYjFlm07wEIZ/uB+fAWj1jb9WkK4H/8ez1QIS2cqlKq3d0IonItx/2eb3P/5ND/gjKH7PyfqB5z1df/ntd3XmXu8FQeem3hPhFR2bqKvlwP9CUL52Zc/4PzS+z+D9gecI3z/Z0H/gPO87+NM9khxJrvGevD/mFB5rv49vBshVr4bAVtX/D8T0r6SMOjd+ztK/OeJf/w9M/f/rqAf8L6nIPGrpp7f2VV94+qdvXftUMW5q3fnxch35/2A9x/e/zssf8B7SH/Au2SDiS9Af+8DjvXeB3z/73T+Ae/l/gHvVud70f4CwohUo7VmwqDvBdEHYRTWWJkGwmDwtxAKlRk8YbD4/VcQnqSxDIow2LhPM9wT0p2SQU2Ibq79g4S0csytFqF7t+iakNY6QiRh8OhYUR0TUnm4rUMYPLkdRbeEzYAIQseK6pSwUUVxhEHPpaK6JGwyMmjCYOPQL7ojjE5qN6FDGCxmzsIbZ4SRvGhhSBgMhq4QXRFGoSpU0yfMwnBHyZQjwpAogm0jwiA5uzGpbgjjV3EBxp7QlddwQRhhvIQBYbDoOJiMDgijGGdj9AmDydI+ELcnjFfYKahPmEWpY9thtCakb+gpaEIY7G1tqiVhTHQ01IQwSI92MZwdIX2XLb64JQyCD623O7okDE8H/cc1IAyS5675bDQnjOi6vmboljCbjUtj32hMGK8qTQgeCYNgZ6qqhoQhfdIzodaEQfps5jiMCEO67jc/kmPCIJifTaajAWFEX5F5hGPCbDr+mmozahNGdGs2AV0QZowvuoyahBH9tOKzJsx09ahnc3QIozC2Gz8nhFk8/tXRmJAahHG8HjT/8y0QZna1t5xiBxJLGFHyZGw/oTghzGT/3B2jIFGEUUzfrdXzJq4Is1jucJ51myGbCcM4ft2YxGdycUeYyWRznjWNZANhmI3eTivDbRKnhJmkH8+dqcrw1BNGmW7Sdc/J5APimvAi8955OBrXHLwgJ8z8AiXbnUXoUis+CC8y3zy/DMcZpshZIcymHY23683eMLJuEl+EF+nPP57+felMp+PuKEOdlQizUcvQTnS1ftzNtRN3DfFJeJUknS82va/j+WX58DC8Eq5W2/e33uawTxNPI8flP6+LXviHXAUnAAAAAElFTkSuQmCC" alt='icon'></img>
            <div className='text-xl'><span className='font-bold'>MV</span>MUN</div>
        </div>
        <div className='flex gap-12 items-center taha '>
            <div>Home</div>
            <div>About</div>
            <div>Info</div>
            <div className='bg-black text-white p-2 px-6 rounded-3xl'>Sign Up</div>

        </div>
        <div className='scrollbar taha2' onClick={()=>{
            setflag(!flag);
        }} >
           <div className='cursor-pointer w-10 rounded-lg h-9 bg-black flex flex-col gap-1.5 justify-center items-center'>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
            <div className='w-6 h-0.5 bg-white'></div>
           </div>

        </div>
    </div>
    {flag&&
        <div className='flex flex-col gap-4 ml-4 mb-4 cursor-pointer'>
           <div className=''>Home</div>
           <div className=''>About</div>
           <div className=''>Info</div>
        </div>
    }
    </div>
  )
}

export default Navbar