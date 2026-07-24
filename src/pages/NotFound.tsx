import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center section pt-24 text-center">
      <div>
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          <FontAwesomeIcon icon={faHouse} /> Back to Home
        </Link>
      </div>
    </main>
  )
}
