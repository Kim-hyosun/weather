
function TodayDustdata({currentAir}) {
	return (
		<div className="dustMap">

		<svg pointerEvents="none" className="leaflet-zoom-animated" width="768" height="751" viewBox="-64 -63 768 751">
			 <g>
				 <path className={"air"+ currentAir[19]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M360 463L359 467L365 465L364 464L363 466L362 464zM370 463L369 464L371 464zM391 463L390 465zM361 460L360 461zM354 456L353 458L355 459L356 457zM380 456L379 457L380 456zM380 454L380 455zM383 452L380 453L385 454zM365 451L364 452L366 451zM385 450L384 451L387 452L389 451L387 451zM383 446L384 447zM382 445L380 448L381 451L383 451L383 446L381 445zM350 443L351 443zM359 442L356 445L360 447L360 445L362 445L361 444zM370 442L368 444L372 445L372 447L376 450L378 444L370 443zM356 440L353 441L355 444L356 442L359 442L357 441zM345 434L344 437L345 436zM341 433L338 434L334 439L335 442L340 441L346 443L343 442L344 438L342 436L339 439L340 435zM381 434L381 435zM328 430L321 438L321 443L324 448L323 452L329 455L329 451L331 449L334 449L334 457L340 455L340 457L342 457L342 448L344 445L337 443L334 446L330 443L330 431zM335 426L334 427L336 428zM388 417L389 418zM356 432L362 431L362 434L364 435L363 434L365 433L365 431L369 430L370 435L365 435L372 439L373 437L373 439L376 439L372 441L375 443L379 441L380 436L378 434L379 435L376 438L376 429L378 427L375 426L380 426L383 423L380 419L382 417L379 416L379 419L373 420L373 422L371 423L371 421L373 420L371 419L376 417L377 418L381 415L378 413L382 412L387 412L390 415L390 417L392 417L390 418L396 417L394 417L393 415L395 415L390 409L392 409L392 407L389 404L391 401L393 401L391 402L394 408L393 409L397 408L399 411L399 408L401 408L400 409L402 411L400 413L403 413L407 416L409 415L409 413L409 415L412 416L415 412L410 407L417 406L417 408L417 402L419 400L428 399L430 394L433 394L434 392L439 390L441 385L440 383L445 385L447 384L446 382L449 379L447 375L444 376L440 373L439 369L434 367L434 365L428 365L429 364L426 362L430 360L431 357L429 355L425 356L424 353L417 355L415 359L414 358L409 361L404 359L402 360L400 358L392 360L387 355L386 349L384 349L384 353L378 353L377 355L372 357L370 353L365 351L362 353L360 351L356 353L355 351L353 351L356 345L355 340L352 337L350 337L349 332L344 330L343 332L339 332L336 328L333 329L330 325L325 323L325 326L323 328L322 327L317 331L315 330L309 339L307 339L307 345L303 353L305 355L303 356L300 362L304 365L306 370L305 373L308 375L302 384L304 386L301 390L299 390L302 395L304 404L318 422L318 425L316 427L318 431L326 430L331 423L333 427L335 425L337 427L340 423L337 420L336 421L337 419L340 421L340 418L343 415L344 416L341 418L341 424L343 427L341 429L342 431L347 432L347 434L349 434L350 437L352 434L353 436L355 436L356 433zM387 446L387 444L386 446zM381 443L380 444zM386 432L386 427L384 431zM397 426L397 423L395 423L396 424L393 427L396 427zM398 426L397 429L392 428L391 431L395 436L389 436L386 433L381 438L385 446L386 443L389 443L390 440L391 441L391 447L387 449L392 449L393 451L391 451L390 453L393 454L391 455L391 457L396 457L395 454L399 454L396 451L396 449L399 448L399 445L405 447L404 443L402 443L403 441L405 441L404 439L406 438L405 436L402 439L401 438L403 435L403 429L401 427L402 423L404 422L400 420L399 424L397 425z"></path>
				 <path className={"air"+ currentAir[10]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M225 396L223 396L220 401L218 400L215 403L217 405L215 406L215 411L217 413L222 412L225 414L226 417L224 417L229 419L236 415L237 416L240 414L241 416L246 414L249 405L247 403L243 403L244 402L241 396L229 400L225 398L225 396z"></path>
				 <path className={"air"+ currentAir[18]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M401 311L396 311L392 315L387 315L387 319L384 325L380 323L381 320L379 319L374 325L373 328L382 332L381 334L376 334L374 337L373 340L377 343L376 347L371 345L370 346L370 348L374 352L372 356L373 357L378 353L384 353L384 349L387 347L386 345L389 343L394 342L393 343L395 346L401 343L400 336L402 336L402 332L404 331L404 329L407 328L407 322L405 321L406 315L403 312z"></path>
				 <path className={"air"+ currentAir[15]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M296 268L298 268L296 265L293 266L291 264L293 262L290 261L291 259L288 262L283 261L284 258L282 256L279 258L280 259L278 264L274 265L272 268L272 274L269 280L273 283L272 284L276 288L277 292L280 288L280 282L282 283L284 289L286 289L287 291L290 288L289 287L292 286L292 274L294 273L296 268z"></path>
				 <path className={"air"+ currentAir[9]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M416 417L418 417zM414 416L415 418L416 417zM413 414L412 416L414 416L410 418L412 420L411 422L413 423L413 425L415 422L414 415zM435 418L438 418L434 413L432 414L435 417zM455 389L457 388L454 386L455 385L453 381L447 381L447 384L445 385L440 383L441 385L439 389L433 394L430 394L428 399L423 399L417 402L417 408L417 406L410 407L412 410L414 410L414 415L418 416L420 411L419 416L421 416L423 413L423 415L424 412L425 419L429 419L428 415L430 419L430 416L433 411L435 410L435 412L438 414L441 411L441 406L445 407L447 406L447 404L449 404L449 401L451 400L452 397L450 395L452 394L452 390L455 388z"></path>
				 <path className={"air"+ currentAir[14]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M263 245L265 247L262 255L263 257L265 257L265 263L270 267L271 265L277 265L280 259L279 258L282 256L283 257L284 254L281 249L277 249L276 247L274 247L275 245L272 241L275 235L269 234L262 230L259 233L260 235L262 235L261 244z"></path>
				 <path className={"air"+ currentAir[17]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M460 373L460 371L461 373L464 371L462 364L465 367L466 371L468 371L468 367L471 363L471 356L469 352L466 350L462 349L457 351L456 353L452 350L452 346L448 344L443 345L442 343L441 345L435 348L436 352L433 352L432 354L431 353L429 355L431 356L431 359L426 362L429 364L428 365L434 365L434 367L439 369L440 373L444 376L447 375L449 379L447 381L453 381L455 384L454 386L457 387L459 385L462 385L460 381L462 379L462 374L461 375z"></path>
				 <path className={"air"+ currentAir[8]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M184 355L183 357L181 357L180 361L184 356zM197 341L196 342L198 342zM196 334L194 334L194 336zM193 333L192 334L194 334zM190 333L190 334zM191 329L189 329L190 330zM218 314L220 313L216 314zM206 308L206 309zM153 298L154 300L155 299zM213 315L203 316L204 320L201 330L199 332L196 332L200 334L206 346L199 353L198 356L204 360L216 359L217 361L217 363L213 361L210 365L207 364L202 366L195 376L201 379L201 385L202 384L204 390L209 390L209 388L211 387L214 389L216 385L218 386L222 383L222 380L224 378L223 374L225 372L230 372L230 370L232 371L232 373L238 375L240 379L239 380L245 380L244 377L247 373L250 372L250 376L252 377L251 380L249 380L253 384L253 387L252 386L251 388L256 391L262 387L266 389L267 387L270 390L275 390L279 388L282 391L285 385L287 384L292 384L296 388L301 390L304 386L302 384L308 375L305 373L306 370L304 365L300 362L303 356L305 355L303 353L307 345L307 339L309 339L315 330L316 331L322 327L323 328L325 326L325 323L328 322L327 321L330 319L327 310L324 308L319 311L316 311L314 309L311 309L310 306L307 308L305 305L303 308L305 309L302 310L303 312L295 308L296 313L291 315L287 312L286 309L283 312L281 310L278 298L270 300L270 303L265 301L265 303L261 302L259 303L259 305L254 304L252 302L253 298L243 295L240 297L238 296L236 298L234 306L224 310L224 313L218 314zM200 334L204 320L210 318L212 319L212 325L217 326L220 335L213 335L213 341L208 347L203 342z"></path>
				 <path className={"air"+ currentAir[6]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M292 286L295 284L297 286L296 287L299 286L301 288L302 295L300 297L307 308L310 305L311 309L319 311L324 308L326 310L330 306L333 306L335 299L337 298L338 295L336 291L338 289L340 289L341 291L343 290L341 286L342 284L340 282L333 284L332 281L329 280L327 282L324 282L323 278L328 272L325 267L327 265L326 258L329 255L329 253L326 251L326 249L322 248L319 245L325 243L324 241L327 238L331 244L332 239L330 236L327 236L328 234L331 234L334 229L336 231L339 230L342 233L344 233L344 231L341 228L344 220L346 222L351 218L352 220L357 221L357 217L359 217L360 214L371 222L373 220L376 221L379 217L379 215L376 213L380 205L390 198L391 194L395 195L397 192L395 191L395 189L393 191L387 189L383 185L381 187L379 186L376 188L373 181L368 181L365 184L362 181L365 180L365 178L368 176L367 174L362 176L361 173L357 171L352 175L351 173L349 173L348 176L341 178L340 171L336 170L332 172L332 178L331 181L330 180L329 182L326 181L319 183L316 181L314 175L309 184L304 182L305 188L302 191L299 191L298 195L295 193L289 193L288 198L283 200L283 203L275 207L274 209L273 212L275 212L275 216L282 220L285 227L277 227L278 229L273 234L275 235L272 241L275 245L274 247L278 249L281 248L284 253L283 261L288 262L290 259L290 261L293 262L291 264L292 266L296 265L298 268L296 268L294 273L292 274L293 276L291 283z"></path>
				 <path className={"air"+ currentAir[7]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M482 307L479 303L470 314L465 311L466 309L468 309L464 309L463 307L469 300L465 297L465 292L463 291L463 275L469 264L468 258L470 255L466 242L468 237L471 236L472 226L467 212L466 197L468 192L463 188L462 183L458 183L456 186L454 186L449 191L450 195L446 195L438 188L435 189L435 192L422 189L419 194L409 189L406 193L406 196L397 192L395 195L393 193L390 195L390 198L381 204L380 207L378 208L378 211L376 213L379 215L379 217L377 218L376 221L373 220L371 222L360 214L359 217L357 216L357 221L351 218L346 222L344 220L341 227L344 233L342 233L339 230L336 231L334 229L333 233L327 236L328 235L332 238L332 242L331 243L328 241L327 238L324 242L325 243L319 245L322 248L326 249L326 251L329 253L329 255L326 258L326 267L328 272L323 278L324 282L327 282L329 279L332 281L333 284L339 282L342 284L341 286L343 290L336 290L336 293L338 295L337 298L335 299L334 305L327 308L327 313L330 319L327 321L327 323L333 329L336 328L339 332L343 332L344 330L349 333L349 335L355 340L356 348L352 351L355 351L356 353L359 353L360 351L362 353L370 352L371 356L373 355L374 353L370 346L371 345L375 347L377 345L377 343L373 341L374 337L376 334L382 333L379 330L373 329L374 325L379 320L381 320L380 323L384 325L387 319L386 315L388 317L396 311L401 311L405 313L404 314L406 316L405 321L407 322L407 328L402 332L402 336L400 336L400 344L396 346L394 345L394 342L389 342L386 345L387 355L392 360L400 358L402 360L404 359L409 361L414 358L415 359L417 355L421 353L424 353L425 355L429 356L431 353L432 354L433 352L435 352L435 348L437 346L442 344L452 346L453 351L456 353L461 349L470 352L474 336L476 333L476 321L479 314L482 311L481 309zM602 136L592 140L594 145L599 147L602 145L603 138z"></path>
				 <path className={"air"+ currentAir[5]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M162 287L164 286zM181 281L180 283zM179 279L180 278zM189 275L188 272L187 275zM195 271L195 269L191 270L197 272zM177 215L176 213L178 209L173 212L173 223L170 217L169 218L170 219L169 224L167 226L167 231L170 230L169 227L173 227L174 231L176 231L174 233L171 231L170 236L173 236L177 234L177 231L180 230L180 237L181 236L183 239L182 247L189 242L197 245L199 249L198 251L200 253L200 261L202 264L204 262L199 269L207 273L202 276L206 283L204 286L204 294L201 295L201 297L202 298L202 296L206 296L207 298L210 298L213 301L213 306L217 309L217 312L222 312L234 306L236 298L238 296L240 297L243 295L253 298L252 302L258 305L261 302L265 303L265 301L269 303L270 300L278 298L281 310L283 312L286 309L288 314L291 315L296 313L295 308L301 310L302 312L302 310L305 309L303 308L303 305L305 305L304 302L300 297L302 295L300 286L296 287L297 286L295 284L289 287L290 288L287 291L286 289L284 289L281 282L277 292L276 288L272 284L273 283L269 280L272 274L272 266L271 265L270 267L265 263L265 257L263 257L262 255L266 247L261 244L262 236L259 233L261 230L265 230L269 234L272 234L275 233L277 227L285 227L282 220L275 216L275 212L272 209L261 203L257 203L256 206L255 205L251 207L246 207L239 210L239 212L234 213L231 212L227 203L221 200L219 201L219 199L214 199L201 192L198 197L199 199L191 198L186 200L190 201L190 203L186 203L191 207L194 206L193 210L195 210L192 211L192 213L190 213L190 216L188 216L189 218L187 217L187 215L185 218L187 220L184 220L182 222L181 219L185 218L183 217L185 212L183 208L184 204L182 204L184 203L183 202L181 213L179 213L178 215zM196 269L197 270zM188 267L186 267L188 268zM178 244L178 245zM190 249L188 248L190 247L188 243L185 245L184 247L186 250L186 260L187 259L186 263L189 263L189 266L191 265L195 267L195 263L192 257L193 256L190 250zM162 237L158 238L162 238zM168 235L169 235zM186 209L187 210zM190 207L189 208L191 208zM194 192L195 195L196 192L195 193z"></path>
				 <path className={"air"+ currentAir[13]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M191 186L190 187L192 188L192 186zM213 179L212 181zM215 178L214 176zM215 175L211 169L206 167L207 172L205 173L207 174L205 175L207 177L209 174L213 174zM218 186L225 193L224 195L228 196L228 200L231 201L233 204L231 206L232 209L234 210L239 210L255 205L256 206L257 202L263 204L269 209L272 209L272 211L274 207L281 205L283 203L282 201L289 197L289 193L294 193L298 195L299 191L302 191L301 189L305 188L304 182L309 184L315 174L315 165L317 165L316 158L318 157L320 150L316 142L319 139L323 138L324 136L321 135L319 132L311 132L302 125L298 127L298 133L294 132L292 134L290 133L290 129L286 123L281 125L279 128L275 141L273 141L265 132L262 133L263 137L260 140L262 142L253 150L250 149L250 146L247 146L243 149L240 148L238 150L235 143L233 145L230 145L231 137L228 138L225 136L223 144L227 146L226 150L224 151L224 153L227 154L224 154L219 160L218 159L222 164L228 166L229 165L233 169L235 169L229 167L228 171L218 169L216 175L219 175L216 177L215 182L218 181L219 182L217 184L219 186L224 180L227 180L230 183L228 185L227 184L225 187L225 192L218 187z"></path>
				 <path className={"air"+ currentAir[1]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M245 126L244 127L241 124L238 128L238 131L233 134L229 130L226 137L231 137L230 145L233 145L235 143L238 150L240 148L243 149L247 146L250 147L250 149L252 150L262 142L260 141L263 133L256 136L256 120L251 121L249 119L248 121L246 121L245 124z"></path>
				 <path className={"air"+ currentAir[0]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M187 126L190 123L190 121L185 118L185 113L182 114L182 118L180 118L186 123L185 124zM211 152L211 155L215 159L214 160L209 159L214 160L219 156L218 155L221 156L227 148L227 145L224 144L223 141L225 140L228 133L224 133L224 131L222 132L215 126L213 130L210 131L210 133L213 132L216 134L211 136L214 135L213 134L216 134L210 137L211 143L214 142L210 145L210 148L212 148zM212 146L213 147L211 147L212 145zM205 140L202 138L201 141L194 142L188 146L190 149L192 148L194 151L196 151L202 146L209 143L207 141zM205 139L207 140L208 137L207 138zM154 195L155 196zM152 189L151 191zM163 187L162 188L164 188zM183 179L182 180L185 181zM179 179L181 180L180 179zM177 178L176 179L178 178zM165 178L165 179zM153 177L152 178L155 178zM171 173L170 174L172 175L172 177L173 176zM203 170L205 173zM182 168L181 169L184 171L188 170L186 170zM165 168L164 173L169 175L171 173L166 170zM196 173L201 170L200 167L197 167L195 169L195 173zM163 166L164 168L165 167zM193 152L193 157L196 156L193 153zM198 137L195 140L198 141L199 138zM195 137L194 139L195 137zM184 135L186 139L191 139L186 136zM203 131L203 133zM130 129L130 130zM177 124L176 125L179 127L179 124zM127 121L127 125L130 122L128 122zM174 120L170 122L174 123zM168 120L167 121L169 121zM177 116L177 117zM180 115L180 116zM44 110L41 111L43 111zM180 106L176 107L174 111L177 113L185 111L186 108L183 107zM195 104L188 109L188 117L193 122L193 125L189 127L192 131L198 132L205 129L202 117L204 114L196 104zM38 102L36 104L36 107L38 107L40 103zM36 87L29 88L32 93L37 94L38 91L41 89L39 86z"></path>
				 <path className={"air"+ currentAir[12]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M228 86L225 86L221 89L220 87L217 90L216 94L218 95L218 102L216 103L218 114L216 111L213 110L208 112L203 109L203 117L206 129L208 131L212 130L215 126L222 132L224 131L224 133L228 133L229 130L233 133L236 133L236 131L238 132L240 125L242 124L243 127L246 126L245 124L246 121L248 121L248 119L251 121L255 120L255 124L257 125L256 135L259 135L264 132L273 141L275 141L275 138L281 125L286 123L290 129L290 133L298 133L299 129L296 126L298 117L293 117L296 113L294 109L296 106L295 103L299 99L302 99L303 91L296 88L297 87L295 84L293 85L288 83L286 71L284 73L283 71L276 73L272 69L274 64L273 63L267 67L264 66L264 63L262 62L263 61L261 59L262 57L253 57L252 59L251 58L251 60L251 58L249 60L245 58L244 65L242 66L244 67L242 69L243 70L239 69L234 72L235 75L233 81L231 82L232 83L230 83L231 85L228 85zM235 78L236 78zM244 65L245 63zM250 60L251 60zM250 56L249 57zM252 54L252 55zM252 54L254 55L254 53zM256 55L256 52L254 52L256 53z"></path>
				 <path className={"air"+ currentAir[2]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M420 175L419 169L416 165L418 162L415 160L415 158L417 154L420 152L420 150L427 146L428 144L425 141L426 138L420 136L419 132L417 132L415 141L410 140L409 137L405 137L404 139L401 137L400 131L403 132L404 129L405 130L404 126L407 122L406 114L402 111L396 110L393 112L391 101L387 97L384 98L381 96L380 90L383 89L383 86L385 84L382 78L377 79L375 77L375 73L380 71L376 64L378 62L378 57L377 55L372 57L371 54L367 54L366 47L364 45L363 46L362 41L359 41L355 44L355 47L348 47L346 48L345 51L339 51L338 53L333 49L328 48L325 52L320 51L316 48L310 49L309 47L302 46L299 46L292 50L289 47L288 48L282 46L279 49L274 50L273 47L269 46L262 49L262 52L260 52L259 49L258 50L256 53L257 57L262 57L262 62L267 69L267 67L268 68L273 63L273 71L275 71L277 74L281 71L283 71L284 73L286 71L288 75L288 83L293 85L295 84L297 87L296 88L303 91L302 99L295 103L296 106L294 108L296 113L293 116L298 117L296 125L298 127L302 125L311 131L317 133L319 132L321 135L324 136L323 138L319 139L316 142L320 146L318 157L316 157L317 165L315 165L316 180L319 183L326 181L329 182L330 180L331 181L331 174L335 170L339 171L341 178L348 176L349 173L351 173L352 175L354 174L355 171L357 171L361 173L362 176L366 174L368 175L365 178L365 180L362 181L365 184L369 181L373 181L376 188L379 186L381 187L383 185L387 189L393 191L395 189L395 191L406 196L407 191L411 189L417 194L421 192L418 191L419 188L417 187L421 182L421 175zM342 46L342 50L341 48zM311 46L310 47zM276 47L279 49zM315 45L312 46L314 46zM260 49L262 49z"></path>
				 <path className={"air"+ currentAir[3]} stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M421 192L422 189L434 192L435 189L438 188L442 190L446 195L450 195L449 191L454 186L462 183L460 179L461 172L456 166L456 164L453 162L452 156L447 152L445 146L440 140L440 135L433 126L434 122L417 104L418 103L413 97L413 95L410 93L410 91L404 84L405 82L401 80L393 67L393 60L389 55L384 41L379 34L380 32L372 16L370 19L369 18L369 29L367 31L366 36L364 35L362 38L362 44L363 46L366 46L367 54L371 54L371 57L374 57L376 55L378 57L378 61L376 64L380 71L375 72L375 77L377 79L382 78L385 84L383 86L383 89L380 90L381 96L390 99L393 112L396 110L402 111L406 114L407 122L404 126L405 130L404 129L402 132L400 131L401 137L404 139L405 137L409 137L410 140L412 141L415 140L417 132L419 132L420 136L423 138L425 137L425 141L427 142L426 143L428 143L425 148L422 148L420 150L420 152L417 154L415 158L415 160L418 162L416 165L419 168L418 169L421 177L421 181L417 187L419 188L419 192z"></path>
				 <path className={"air"+ currentAir[11]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M181 625L180 626zM243 587L241 589L244 590L244 588zM226 583L214 584L214 586L210 585L209 587L203 588L201 587L196 590L184 593L184 595L172 605L172 616L176 617L180 623L184 618L212 618L216 614L222 614L226 611L231 611L236 602L240 597L241 598L241 593L240 594L238 592L239 589L237 587L234 587L231 585L231 583L228 583zM187 540L185 540L185 542L187 541zM182 538L183 539z"></path>
				 <path className={"air"+ currentAir[16]}  stroke="white" strokeOpacity="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="white" fillOpacity="0" fillRule="evenodd" d="M240 536L239 537L241 537zM275 528L275 530L277 531L276 528zM282 528L283 528zM274 528L272 529L272 531L276 533L273 529zM75 525L73 525L73 527L78 529L76 525zM210 523L211 524zM210 517L212 517L208 517L205 515L202 517L203 521L206 521L208 518zM200 514L200 515zM215 513L215 516L213 518L215 522L217 520L216 516L218 514zM202 513L202 514zM263 512L261 512L263 512zM225 512L224 514L226 514zM237 511L233 514L233 516L236 518L239 518L240 516L238 511zM142 511L143 512zM207 509L206 514L209 516L209 514L212 515L212 511L208 510zM270 507L268 511L271 510zM212 507L210 508L212 508zM150 508L150 510L152 508zM160 507L161 508L158 509L161 510L162 508zM173 507L172 508zM149 506L147 507L148 508zM207 504L205 504L208 504zM155 504L154 505zM279 503L279 505L280 503zM283 502L283 504zM159 500L158 504L164 503L163 501L161 501zM154 499L154 501zM245 497L243 499L244 502L248 499L247 498zM158 497L155 499L161 498zM232 495L229 498L224 498L228 500L231 499L232 502L235 499L236 501L237 497L233 497zM157 495L158 497L158 495zM246 496L250 497L252 499L250 499L251 500L252 498L254 498L252 497L256 498L248 493L248 495L246 495zM184 452L183 451L179 462L181 465L183 465L181 466L181 468L184 470L184 472L191 473L191 476L195 474L198 476L196 477L199 479L197 480L199 483L198 485L200 488L202 486L203 487L203 489L199 493L199 496L202 495L204 498L202 500L204 503L207 499L209 500L212 495L212 490L213 491L215 488L217 489L219 486L222 486L224 483L223 481L226 480L225 473L227 466L227 483L236 488L236 484L242 485L241 482L243 483L245 481L243 480L243 476L246 475L245 472L248 468L244 466L251 465L259 457L263 458L266 456L266 453L268 451L271 454L277 452L278 457L275 462L272 461L272 456L269 458L268 463L265 463L257 475L260 477L270 477L273 480L271 481L278 486L278 484L276 484L280 481L281 482L281 479L284 479L287 474L284 473L286 472L284 472L283 470L290 471L293 469L292 465L289 464L291 464L282 456L282 449L285 445L280 443L281 442L283 444L286 443L287 441L290 442L292 440L291 438L294 438L296 442L294 445L298 446L301 452L297 456L297 462L300 465L299 463L305 466L306 465L303 457L305 457L307 452L311 455L314 453L315 454L317 440L310 440L309 442L305 443L304 441L302 441L301 438L303 436L301 436L301 433L302 431L304 435L308 435L308 432L310 433L313 427L314 429L318 425L318 423L316 418L310 413L310 410L304 404L299 389L292 384L285 385L282 391L279 388L276 390L270 390L267 387L266 389L262 387L257 391L251 388L252 386L253 387L253 385L252 382L250 382L249 380L251 380L252 377L250 376L250 372L246 375L245 380L239 380L240 379L238 378L238 376L235 373L232 373L231 370L230 372L225 372L222 382L218 386L216 385L214 389L211 387L209 388L209 390L204 390L202 384L201 385L199 381L201 379L199 377L194 376L193 382L195 384L192 383L190 393L186 393L183 401L187 402L186 403L190 401L188 404L194 412L197 413L197 416L194 419L195 421L192 421L193 416L190 418L189 416L187 416L187 407L185 410L180 408L178 412L179 413L170 413L172 418L174 417L173 418L175 420L175 418L177 418L178 423L181 421L179 418L184 419L183 418L186 415L188 418L187 419L191 420L191 422L187 424L188 427L183 427L185 431L184 432L186 432L186 434L190 433L190 424L192 429L191 433L193 434L191 437L193 442L191 442L189 449L196 447L197 448L190 450L189 453L191 454L189 458L185 452zM206 462L194 455L191 455L192 453L200 453L199 456L203 461L207 460L207 462zM200 452L202 452zM201 451L198 448zM229 419L225 417L225 414L223 412L217 413L215 411L215 406L217 405L215 403L217 403L218 400L220 401L223 396L225 396L225 398L229 400L241 396L244 402L243 403L247 403L249 405L248 410L242 416L240 414L231 418zM153 493L152 495L153 494zM255 492L253 492L254 493zM251 491L251 492zM183 491L181 494L182 495L184 493zM213 491L214 491zM215 499L217 499L219 503L227 503L225 502L226 500L224 500L222 493L218 490L214 493L215 499zM242 489L240 492L234 490L234 494L238 496L242 494L242 490zM160 490L160 491zM269 489L269 492L271 493L271 490zM221 489L222 489zM91 491L91 492zM274 486L275 486zM232 486L227 487L225 490L226 491L224 492L227 493L226 495L229 492L231 493L235 491L231 489L232 487zM251 484L249 485L250 488L252 488L253 490L253 485L251 485zM320 484L320 486L318 487L319 489L321 486L320 485zM288 482L289 485L291 485L289 486L292 487L292 489L296 487L296 485L294 485L293 483L290 484zM287 482L287 483zM267 480L264 480L259 483L258 481L256 483L256 486L257 485L258 487L261 488L266 487L268 481zM322 480L319 482L322 482L321 481zM161 480L159 482L160 484L161 482zM259 477L257 477L256 479L259 479L259 477zM289 475L286 478L289 479L287 480L288 482L293 481L289 479L290 475zM314 474L312 476L310 475L314 479L319 481L316 475zM314 472L314 473zM313 471L311 471L313 472zM307 470L305 472L307 474L309 472L311 473L310 471L309 472zM313 470L314 472L315 471zM179 470L179 473L175 477L176 478L174 478L174 480L173 478L168 484L166 484L167 485L164 488L166 493L169 492L168 496L177 494L183 491L182 490L184 490L185 488L186 491L190 483L188 482L191 482L191 479L187 474L185 475L182 471L180 471zM306 468L306 470L307 468zM312 467L311 468L313 468zM256 468L255 469L257 469zM154 469L154 469zM297 467L295 467L297 469L298 467zM305 466L304 467L306 467zM174 466L175 466zM161 465L160 468L161 467L163 470L162 473L158 474L161 473L160 476L158 476L165 474L164 472L166 470L163 467zM143 465L140 468L138 468L139 470L143 468zM156 466L155 467L157 467zM297 464L298 466L299 465zM157 465L158 472L161 472L162 471L159 465zM152 464L151 465L154 466zM107 463L108 463zM160 461L160 463zM170 461L167 463L168 467L174 465L173 463zM99 460L98 461zM163 459L162 461zM286 457L287 460L288 458zM173 457L171 459L174 459zM102 460L100 462L101 465L106 459L102 459zM166 456L164 457L166 457zM167 456L168 457zM313 455L312 456L314 458L313 456zM314 454L316 459L312 464L313 465L311 466L317 470L320 470L320 462L316 457L317 456L319 458L316 454zM83 456L81 460L83 460L84 457zM152 454L151 456L148 456L148 460L154 462L157 459L157 457L154 456zM157 452L158 455L158 453zM107 453L106 455L108 455zM292 450L292 452L293 451zM158 450L158 451zM164 449L162 454L163 457L166 455L167 456L168 454L169 458L171 458L171 452L165 450zM188 449L189 453L190 450zM188 449L188 451zM183 448L183 449zM185 448L184 451L186 449zM289 446L287 448L290 447zM155 446L153 446L153 448L146 450L147 456L151 454L150 452L156 451L156 447zM169 445L169 447L164 448L169 451L171 450L170 448zM186 445L186 447zM160 444L161 446L162 445L162 447L162 445zM190 438L188 439zM166 437L167 440L162 441L164 447L167 446L166 444L168 444L169 442L168 441L170 439L168 438zM312 436L310 436L311 439L315 438L315 436L313 436zM172 435L173 437zM188 434L188 435zM183 433L181 434L183 435L183 437L181 437L181 440L177 439L177 441L186 441L186 444L188 445L190 441L188 439L185 440L185 437L188 436L184 434zM308 432L307 434L310 434zM177 431L177 434L179 434L179 432zM164 435L162 431L158 435L157 434L156 437L154 438L160 441L165 437L163 436zM313 430L311 434L316 434L316 436L318 437L318 434L314 432L314 430zM317 434L317 436zM174 430L175 430zM316 429L314 430L315 432L317 432L317 430zM178 429L178 431zM181 428L181 432L183 431L182 428zM175 426L175 429zM178 424L180 427L179 424zM168 422L165 424L169 425L167 430L172 425L170 422zM169 418L169 421L174 422L174 420L171 418zM168 414L169 414zM158 413L158 415zM170 408L160 413L160 418L163 417L165 419L167 416L167 409L169 409zM174 408L174 409zM167 402L168 403zM169 392L168 393L170 393zM158 384L158 387L159 386z">
				 </path>
			 </g>
		 </svg>
	 </div>
	);
}

export default TodayDustdata;