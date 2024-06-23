import { ability } from '@saas/auth'
import { log } from 'console'

const userCanInvite = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')

log(userCanInvite)
log(userCanDelete)
