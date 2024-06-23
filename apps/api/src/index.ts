import { defineAbilityFor } from '@saas/auth'
import { log } from 'console'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInvite = ability.can('invite', 'User')
const userCanDelete = ability.can('delete', 'User')
const userCannotDelete = ability.cannot('delete', 'User')

log(userCanInvite)
log(userCanDelete)
log(userCannotDelete)
