import AppLogo from '@/components/AppLogo'
import SearchBar from '@/components/SearchBar'
import { Cog8ToothIcon, HomeIcon, FolderOpenIcon, WifiIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { ArrowDownIcon, Bars3BottomLeftIcon, ComputerDesktopIcon, MusicalNoteIcon, PhotoIcon, PlayIcon } from '@heroicons/react/24/outline'

interface Route {
  path: string,
  component: React.FC
  icon: any
}
// the routes
const routes: Route[] = [{
  path: '/',
  component: Home,
  icon: <HomeIcon />
},
{
  path: '/files',
  component: Home,
  icon: <FolderOpenIcon />
},
{
  path: '/wifi',
  component: Home,
  icon: <WifiIcon />
},
{
  path: '/settings',
  component: Home,
  icon: <Cog8ToothIcon />
},
{
  path: '/settings',
  component: Home,
  icon: <ArrowRightOnRectangleIcon />
},

]


interface QuickAccessTab {
  name: string,
  icon: any,
  color: string,
  action?: (path: string) => void
}


const quickAccessTabs: QuickAccessTab[] = [
  {
    name: 'Images',
    icon: <PhotoIcon />,
    color: '#6166fe'
  },
  {
    name: 'Music',
    icon: <MusicalNoteIcon />,
    color: '#6166fe'

  },
  {
    name: 'Videos',
    icon: <PlayIcon />,
    color: '#3074f5'
  },
  {
    name: 'Documents',
    icon: <Bars3BottomLeftIcon />,
    color: '#3074f5'

  },
  {
    name: 'Downloads',
    icon: <ArrowDownIcon />,
    color: '#22244a'
  },
  {
    name: 'Desktop',
    icon: <ComputerDesktopIcon />,
    color: '#22244a'

  }
]

const recentFiles = [
  {
    name: 'image1.jpg',
    size: '1.2MB',
    lastModified: 'Aug 26 2022'
  },
  {
    name: 'image2.jpg',
    size: '1.2MB',
    lastModified: 'Oct 6 2022'
  },
  {
    name: 'image3.jpg',
    size: '1.2MB',
    lastModified: 'Oct 6 2022'
  },

]
export default function Home() {
  return (
    <div className='grid grid-cols-12 h-full mb-0' id='container' style={
      {
        height: '100vh',
        overflowY: 'hidden'
      }
    }>
      <nav className='col-span-1 bg-[#fafbfd] text-gray-600 dark:text-gray-300 dark:bg-[#1a1b1b] pt-10'>
        <AppLogo />
        <ul className=' h-full flex flex-col items-center'>
          {routes.map((route, index) => (
            <li key={index} className='w-6 h-6 my-5 first:mt-10 last:mt-auto last:mb-20 text-app-500dark:text-gray-300'>
              <a href={route.path}>
                <span className='sr-only'>
                  {route.path}
                </span>
                {route.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className='col-span-7 pt-10 px-20  dark:bg-[#1f2222] '>
        {/* search bar goes here */}
        <section>
          <SearchBar onSearch={function (city: string): void {
            throw new Error('Function not implemented.')
          }} />
        </section>

        {  /*quick access section*/}
        <section className='my-12'>
          <h2 className='mt-20 mb-8  font-medium dark:text-gray-300'>
            Quick Access
          </h2>
          <ul className='flex flex-wrap gap-4 items-center justify-around mt-4'>
            {quickAccessTabs.map((tab, index) => (
              <li key={index} className='flex flex-col items-center justify-center w-20 h-20 ' >
                <a href={tab.name.toLowerCase()} className='rounded-lg shadow-md  px-3' style={{
                  backgroundColor: tab.color
                }}>
                  <div className='rounded-full my-4 mx-2 flex w-[45px]   text-gray-100'>
                    {tab.icon}
                  </div>
                </a>
                <span className='text-gray-600 dark:text-gray-500 block mt-2 text-small'>
                  {tab.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/*recent files section*/}
        <section className='my-16 hidden'>
          <h2 className='flex justify-between mt-20 mb-8 '>
            <span className=' font-medium dark:text-gray-400'>
              Recent Files
            </span>
            <span className='text-gray-500 dark:text-violet'>
              view all
            </span>
          </h2>
          <table className='w-full'>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Last Modified</th>
              </tr>

              {recentFiles.map((file, index) => (
                <tr key={index}>
                  <td>
                    {file.name}
                  </td>
                  <td>
                    {file.size}
                  </td>
                  <td>
                    {file.lastModified}
                  </td>
                </tr>
              ))}
             
            </tbody>
          </table>
        </section>
      </main>
      <aside className='col-span-4 pt-10 px-8  bg-[#fafbfd] dark:bg-[#1a1b1b] dark:tet-gray-400'>
        <h2 className='font-medium dark:text-gray-400'>
          Downloads
        </h2>

      </aside>
    </div>
  )
}