// app/mentions-legales/page.tsx
export default function MentionsLegales() {

    const people = [
        {
            name: 'Simon SMITH',
            role: 'Je sais pas ce que tu es ?',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Pote 1',
            role: 'Je sais pas ce que tu es ton rôle ?',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Pote 2',
            role: 'Je sais pas ce que tu es ton rôle ?',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]
    return (
        <div className="relative isolate px-8 pt-16 pb-16">
                <div className="relative max-w-3xl my-8 p-8 sm:my-16 lg:my-24 lg:py-16 text-white bg-white/15 backdrop-blur-sm rounded-4xl shadow-lg mx-auto grid gap-20 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
                            Notre équipe
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-200 text-justify">
                            Tous passionés par le sport, nous avons décidé de faire de ce projet de média, une réalité !
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-blue-100">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>








    );
}
