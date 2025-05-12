// app/counter/page.js or any server component
import dynamic from 'next/dynamic';

const Counter = dynamic(() => import('./counter'));

export const metadata = {
  title: 'Welcome Counter',
  description: 'lorem ipsum description',
}

export default function CounterPage() {
    return (
        <div>
            <Counter />
        </div>
    );
}
